import {z} from 'zod'

export const csvSchema = z.object({
  date: z.string().min(1, 'date is required'),
  counterparty: z.string().min(1, 'counterparty is required'),
  description: z.string().min(1, 'description is required'),
  amount: z.coerce
    .number({message: 'amount must be a number'})
    .refine((n) => n !== 0, 'amount must not be zero'),
})

export type transactionsSchema = z.infer<typeof csvSchema>

export type ErrorTransaction = { index: number, error: string }

export type TransactionType = 'income' | 'expense'

export interface Transaction {
  id: string
  date: string
  counterparty: string
  description: string
  amount: number
  type: TransactionType
}

export type FilterType = 'all' | 'income' | 'expense'

export type LoadCsvFile = {
  onLoadFile: (file: File) => void
}