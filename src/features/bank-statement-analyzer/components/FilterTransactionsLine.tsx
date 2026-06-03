import React from 'react';
import {FilterType} from "@/features/bank-statement-analyzer/types/types";
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

function FilterTransactionsLine({search, filter, queryFilter}: {
  search: string,
  filter: FilterType,
  queryFilter: (st: string, filter: FilterType) => void,
}) {

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    queryFilter(e.target.value, filter)
  }

  const onFilter = (opt: FilterType) => {
    queryFilter(search, opt)
  }

  return (
    <div className="flex items-center gap-2 mb-4">
      <InputGroup className="rounded-md">
        <InputGroupInput placeholder="Пошук..." value={search} onChange={onSearch}/>
        <InputGroupAddon>
          <SearchIcon/>
        </InputGroupAddon>
      </InputGroup>

      <Select value={filter} onValueChange={onFilter}>
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