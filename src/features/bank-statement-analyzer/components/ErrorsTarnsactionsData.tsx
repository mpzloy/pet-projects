import React from 'react';
import {ErrorTransaction} from "@/features/types/types";
import {Card, CardContent} from "@/shared/ui/card";

export default function ErrorsTransactionsData({errorsTransactions}: { errorsTransactions: ErrorTransaction[] }) {

  if (errorsTransactions.length === 0) {
    return null
  }

  return (
    <Card className="bg-red-50 dark:bg-red-50/10 mb-8 rounded-lg">
      <CardContent>
        <ul>
          {errorsTransactions.map((item, index) => {
            return (
              <li key={index}>Рядок {item.index} - {item.error}</li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}