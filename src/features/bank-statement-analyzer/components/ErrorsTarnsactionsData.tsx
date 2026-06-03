import React from 'react';
import {ChevronDownIcon} from "lucide-react"
import {ErrorTransaction} from "@/features/bank-statement-analyzer/types/types";
import {Card, CardContent} from "@/shared/ui/card";
import {Button} from "@/shared/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/ui/collapsible"

export default function ErrorsTransactionsData({errorsTransactions}: { errorsTransactions: ErrorTransaction[] }) {

  if (errorsTransactions.length === 0) {
    return null
  }

  return (
    <Card className="bg-red-50 dark:bg-red-200/10 mb-8 rounded-lg">
      <CardContent>
        <Collapsible className="rounded-md">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="group w-full bg-transparent hover:bg-transparent dark:hover:bg-transparent cursor-pointer">
              Помилки при обробці транзакцій
              <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180"/>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
            <ul>
              {errorsTransactions.map((item, index) => {
                return (
                  <li key={index}>Рядок {item.index} - {item.error}</li>
                )
              })}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}