import Papa from "papaparse"
import type {ParseResult} from "papaparse";
import {Transaction, transactionsSchema, ErrorTransaction, csvSchema} from "@/features/types/types";

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
      id: `${new Date()} - ${Math.random()}`,
      date: valid.date,
      counterparty: valid.counterparty,
      description: valid.description,
      amount,
      type: amount > 0 ? 'income' : 'expense'
    } as Transaction;
  }).filter((item): item is Transaction => item !== null)

  return {errorsRows, transactions}
}
