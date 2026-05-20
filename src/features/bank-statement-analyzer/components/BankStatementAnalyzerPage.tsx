'use client'

import CsvDropZone from "@/features/bank-statement-analyzer/components/CsvDropZone";
import TransactionsTable from "@/features/bank-statement-analyzer/components/TransactionsTable";
import ErrorTransactionsData from "@/features/bank-statement-analyzer/components/ErrorsTarnsactionsData";
import {LoadCsv, visibleTransactions} from "@/features/bank-statement-analyzer/lib/statements";
import useAppState from "@/features/bank-statement-analyzer/hooks/useAppState";

export default function BankStatementAnalyzerPage() {
  const {state, dispatch} = useAppState()

  const getTransactions = async (file: File) => {
    dispatch({type: "CLEAR_TRANSACTIONS_ERRORS"})

    const csvData = await LoadCsv(file)
    const t = visibleTransactions(csvData)

    console.log(t.transactions)

    dispatch({type: "SET_TRANSACTIONS", payload: t.transactions})
    dispatch({type: "SET_VISIBLE_TRANSACTIONS", payload: t.transactions})
    t.errorsRows.forEach(item => dispatch({type: "SET_TRANSACTIONS_ERRORS", payload: item}))
  }

  return (
    <>
      <div className="my-6 text-4xl text-center"><h1>Аналізатор банківської виписки</h1></div>

      <CsvDropZone onLoadFile={getTransactions}/>

      <ErrorTransactionsData errorsTransactions={state.errorsTransactions} />

      <TransactionsTable currentTransactions={state.visibleTransactions} />

    </>
  );
}
