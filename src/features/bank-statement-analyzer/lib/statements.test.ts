import { describe, it, expect } from 'vitest'
import { calculateTotals, queryTransactionsSinglePass, visibleTransactions } from './statements'
import type { Transaction } from '../types/types'

describe('calculateTotals', () => {
  it('calculates income, expense and net correctly', () => {
    const txs: Transaction[] = [
      { id: '1', date: '2023-01-01', counterparty: 'Alice', description: 'Salary', amount: 1000, type: 'income' },
      { id: '2', date: '2023-01-02', counterparty: 'Bob', description: 'Rent', amount: -500, type: 'expense' },
      { id: '3', date: '2023-01-03', counterparty: 'Cafe', description: 'Coffee', amount: -5.5, type: 'expense' },
    ]

    const totals = calculateTotals(txs)

    // В поточній реалізації expenseTotal накопичує item.amount (тобто від'ємні суми)
    expect(totals.incomeTotal).toBeCloseTo(1000)
    expect(totals.expenseTotal).toBeCloseTo(-505.5)
    expect(totals.netResult).toBeCloseTo(494.5)
  })

  it('returns zeros for empty array', () => {
    const totals = calculateTotals([])
    expect(totals.incomeTotal).toBe(0)
    expect(totals.expenseTotal).toBe(0)
    expect(totals.netResult).toBe(0)
  })
})

describe('queryTransactionsSinglePass', () => {
  const txs: Transaction[] = [
    { id: '1', date: '2023-01-01', counterparty: 'Alice', description: 'Salary payment', amount: 100, type: 'income' },
    { id: '2', date: '2023-01-02', counterparty: 'Bob', description: 'Monthly Rent', amount: -50, type: 'expense' },
    { id: '3', date: '2023-01-03', counterparty: 'Coffee shop', description: 'Coffee', amount: -5, type: 'expense' },
  ]

  it('returns all when search is empty and filter is "all"', () => {
    const res = queryTransactionsSinglePass(txs, 'all', '')
    expect(res).toHaveLength(3)
  })

  it('filters by type "income"', () => {
    const res = queryTransactionsSinglePass(txs, 'income', '')
    expect(res).toHaveLength(1)
    expect(res[0].type).toBe('income')
  })

  it('filters by type "expense"', () => {
    const res = queryTransactionsSinglePass(txs, 'expense', '')
    expect(res.every(r => r.type === 'expense')).toBeTruthy()
  })

  it('searches case-insensitive in counterparty and description', () => {
    const res1 = queryTransactionsSinglePass(txs, 'all', 'salary')
    expect(res1).toHaveLength(1)
    const res2 = queryTransactionsSinglePass(txs, 'all', 'coffee')
    expect(res2).toHaveLength(1)
    const res3 = queryTransactionsSinglePass(txs, 'all', 'coFfEe') // case-insensitive
    expect(res3).toHaveLength(1)
  })

  it('applies filter and search together', () => {
    // search "monthly" + filter expense should match Bob's rent
    const res = queryTransactionsSinglePass(txs, 'expense', 'monthly')
    expect(res).toHaveLength(1)
    expect(res[0].counterparty).toBe('Bob')
  })
})

describe('visibleTransactions', () => {
  it('parses rows and returns transactions and errorsRows', () => {
    // Импровізований ParseResult-like обʼєкт
    const csvLike: any = {
      data: [
        { date: '2023-01-01', counterparty: 'AB', description: 'Good', amount: '100' }, // valid
        { date: '', counterparty: 'X', description: 'Bad', amount: '0' }, // invalid: date empty, amount zero, counterparty too short
      ],
    }

    const result = visibleTransactions(csvLike)

    // Перша рядок має конвертуватись в транзакцію
    expect(result.transactions.length).toBeGreaterThanOrEqual(1)
    // Друга рядок потрапить у errorsRows
    expect(result.errorsRows.length).toBeGreaterThanOrEqual(1)
    // Перевіримо, що transaction має поля amount і type
    const first = result.transactions[0]
    expect(first).toHaveProperty('amount')
    expect(first).toHaveProperty('type')
  })
})