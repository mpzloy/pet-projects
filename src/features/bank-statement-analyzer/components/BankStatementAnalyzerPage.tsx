'use client'

import CsvDropZone from "@/features/bank-statement-analyzer/components/CsvDropZone";
import {LoadCsv, visibleTransactions} from "@/features/bank-statement-analyzer/lib/statements";
import useAppState from "@/features/bank-statement-analyzer/hooks/useAppState";

export default function BankStatementAnalyzerPage() {
  const {state, dispatch} = useAppState()

  const getTransactions = async (file: File) => {
    const csvData = await LoadCsv(file)
    const t = visibleTransactions(csvData)

    dispatch({type: "SET_TRANSACTIONS", payload: t.transactions})
    t.errorsRows.forEach(item => dispatch({type: "SET_TRANSACTIONS_ERRORS", payload: item}))
  }

  return (
    <>
      <div className="my-6 text-4xl text-center"><h1>Аналізатор банківської виписки</h1></div>

      <CsvDropZone onLoadFile={getTransactions}/>
      <ul>
        {state.errorsTransactions.map((item, index) => {
          return (
            <li key={index}>{item.index} - {item.error}</li>
          )
        })}
      </ul>

    </>
  );
}
