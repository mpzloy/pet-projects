import Papa from "papaparse"
import type {ParseResult} from "papaparse";
import {Transaction, ErrorTransaction, csvSchema, FilterType} from "@/features/bank-statement-analyzer/types/types";

export function LoadCsv(file: File): Promise<ParseResult<any>> {
  return new Promise((resolve, reject) => {
    try {
      Papa.parse(file, {
        header: true,
        encoding: "utf8",
        skipEmptyLines: true,
        complete: (results) => resolve(results),
        error: (err) => reject(err)
      })
    } catch (e) {
      reject(e)
    }
  })
}

export function visibleTransactions(data: ParseResult<any>) {
  const errorsRows: ErrorTransaction[] = []
  const transactions = data.data.map((item, index) => {

    const parsed = csvSchema.safeParse(item)

    if (!parsed.success) {
      errorsRows.push({
        index: index + 1,
        error: parsed.error.issues.map(er => `${er.path}: ${er.message}`).join(', ')
      })
      return null
    }

    const valid = parsed.data;
    const amount = Number(valid.amount);

    return {
      id: `${Date.now()}-${Math.floor(Math.random() * 100000)}`,
      date: valid.date,
      counterparty: valid.counterparty,
      description: valid.description,
      amount,
      type: amount > 0 ? 'income' : 'expense'
    } as Transaction;
  }).filter((item): item is Transaction => item !== null)

  return data.data.reduce<{
    transactions: Transaction[]
    errorsRows: ErrorTransaction[]
  }>((acc, item, inx: number) => {
    const parsed = csvSchema.safeParse(item)

    if (!parsed.success) {
      acc.errorsRows.push({
        index: inx + 1,
        error: parsed.error.issues
          .map(er => `${er.path.join('.')}: ${er.message}`)
          .join(', ')
      })

      return acc
    }

    const valid = parsed.data
    const amount = Number(valid.amount)

    const transaction: Transaction = {
      id: `${Date.now()}-${Math.random()}`,
      date: valid.date,
      counterparty: valid.counterparty,
      description: valid.description,
      amount,
      type: amount > 0 ? 'income' : 'expense'
    }

    acc.transactions.push(transaction)

    return acc
  }, {
    transactions: [],
    errorsRows: []
  })
}

export function calculateTotals(transactions: Transaction[]) {
  const totals = transactions.reduce<{
    incomeTotal: number
    expenseTotal: number
    netResult: number
  }>((acc, item) => {

    if (item.type === "income") {
      acc.incomeTotal += item.amount
    } else {
      acc.expenseTotal += item.amount
    }

    acc.netResult += item.amount

    return acc
  }, {
    incomeTotal: 0,
    expenseTotal: 0,
    netResult: 0,
  })

  totals.incomeTotal = Number((totals.incomeTotal).toFixed(2))
  totals.expenseTotal = Number((totals.expenseTotal).toFixed(2))
  totals.netResult = Number((totals.netResult).toFixed(2))
  return totals
}

export function queryTransactionsSinglePass(transactions: Transaction[], f: FilterType, s: string) {
  const searchTerm = (s || '').toLowerCase().trim()

  if (!searchTerm) {
    return transactions.filter(item => f === 'all' || item.type === f)
  }

  return transactions.filter((item) => {

    if (f !== 'all' && item.type !== f) return false

    const counterparty = (item.counterparty || '').toLowerCase()
    const description = (item.description || '').toLowerCase()

    return counterparty.includes(searchTerm) || description.includes(searchTerm)
  })
}