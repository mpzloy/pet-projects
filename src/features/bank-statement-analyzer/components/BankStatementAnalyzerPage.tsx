'use client'

import CsvDropZone from "@/features/bank-statement-analyzer/components/CsvDropZone";
import TransactionsTable from "@/features/bank-statement-analyzer/components/TransactionsTable";
import ErrorTransactionsData from "@/features/bank-statement-analyzer/components/ErrorsTarnsactionsData";
import {
  calculateTotals,
  LoadCsv, queryTransactionsSinglePass,
  visibleTransactions
} from "@/features/bank-statement-analyzer/lib/statements";
import useAppState from "@/features/bank-statement-analyzer/hooks/useAppState";
import SummaryCard from "@/features/bank-statement-analyzer/components/SummaryCard";
import FilterTransactionsLine from "@/features/bank-statement-analyzer/components/FilterTransactionsLine";
import {FilterType} from "@/features/bank-statement-analyzer/types/types";

export default function BankStatementAnalyzerPage() {
  const {state, dispatch} = useAppState()

  const getTransactions = async (file: File) => {
    dispatch({type: "CLEAR_TRANSACTIONS_ERRORS"})

    const csvData = await LoadCsv(file)
    const t = visibleTransactions(csvData)

    console.log(t.transactions)

    const result = calculateTotals(t.transactions)

    dispatch({type: "SET_TRANSACTIONS", payload: t.transactions})
    dispatch({type: "SET_VISIBLE_TRANSACTIONS", payload: t.transactions})
    dispatch({type: "SET_RESULT", payload: result})
    t.errorsRows.forEach(item => dispatch({type: "SET_TRANSACTIONS_ERRORS", payload: item}))
  }

  const queryTransactionsSinglePassData = (st: string, filter: FilterType) => {

    dispatch({type: "SET_SEARCH", value: st})
    dispatch({type: "SET_FILTER", value: filter})

    const visible = queryTransactionsSinglePass(state.transactions, filter, st)

    dispatch({type: "SET_VISIBLE_TRANSACTIONS", payload: visible})
    dispatch({type: "SET_RESULT", payload: calculateTotals(visible)})
  }

  return (
    <>
      <div className="my-6 text-4xl text-center"><h1>Аналізатор банківської виписки</h1></div>

      <CsvDropZone onLoadFile={getTransactions}/>

      <ErrorTransactionsData errorsTransactions={state.errorsTransactions}/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <SummaryCard title="Загальний дохід" total={state.result.incomeTotal}/>
        <SummaryCard title="Загальна витрата" total={state.result.expenseTotal}/>
        <SummaryCard title="Чистий результат" total={state.result.netResult}/>
        <SummaryCard title="Кількість транзакцій" total={state.transactions.length}/>
      </div>

      <FilterTransactionsLine search={state.searchTransactions} filter={state.filterTransactions} queryFilter={queryTransactionsSinglePassData}/>

      <TransactionsTable currentTransactions={state.visibleTransactions} result={state.result}
                         filterData={state.filterTransactions}/>

    </>
  );
}
