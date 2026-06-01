import React from 'react';
import {FilterType, Transaction} from "@/features/types/types";
import {SearchIcon} from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/shared/ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"

function FilterTransactionsLine({transactions, filterTransactions}: { transactions: Transaction[], filterTransactions:  (filter: FilterType) => void }) {

  const onFilter = (opt: FilterType) => {
    filterTransactions(opt)
  }

  if (!transactions || !transactions.length) return null

  return (
    <div className="flex items-center gap-2 mb-4">
      <InputGroup className="rounded-md">
        <InputGroupInput placeholder="Пошук..."/>
        <InputGroupAddon>
          <SearchIcon/>
        </InputGroupAddon>
      </InputGroup>

      <Select onValueChange={onFilter}>
        <SelectTrigger className="w-48 rounded-md">
          <SelectValue placeholder="Операції"/>
        </SelectTrigger>
        <SelectContent className="rounded-md">
          <SelectGroup>
            <SelectItem value="all">Всі</SelectItem>
            <SelectItem value="income">Дохід</SelectItem>
            <SelectItem value="expense">Витрати</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default FilterTransactionsLine;