'use client'

import React from 'react';
import {FilterType, Result, Transaction} from "@/features/types/types";
import {Card, CardContent} from "@/shared/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"
import {Badge} from "@/shared/ui/badge"

export default function TransactionsTable({currentTransactions, result, filterData}: {
  currentTransactions: Transaction[],
  result: Result,
  filterData: FilterType
}) {

  const total = filterData === 'all' ? result.netResult : (filterData === 'income' ? result.incomeTotal : result.expenseTotal)
  console.log(total, filterData)

  if (currentTransactions.length === 0) {
    return (
      <p className="text-center text-gray-500">Немає транзакцій для відображення.</p>
    )
  }

  return (
    <Card className="rounded-lg mb-8">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Дата</TableHead>
              <TableHead>Контрагент</TableHead>
              <TableHead>Признвчення</TableHead>
              <TableHead className="text-right">Сума</TableHead>
              <TableHead className="text-center">Тип операції</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTransactions.map((trx: Transaction) => (
              <TableRow key={trx.id}>
                <TableCell className="">{trx.date}</TableCell>
                <TableCell>{trx.counterparty}</TableCell>
                <TableCell>{trx.description}</TableCell>
                <TableCell className="text-right">{trx.amount}</TableCell>
                <TableCell className="text-center">
                  <Badge
                    className={`rounded-full dark:text-white ${trx.type === 'income' ? 'bg-green-700/80' : 'bg-red-500/80'}`}>
                    {trx.type === 'income' ? 'Дохід' : 'Витрати'}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Загалом:</TableCell>
              <TableCell className="text-right">{total}</TableCell>
              <TableCell className=""></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}