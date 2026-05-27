import {useImmerReducer} from "use-immer";
import {Transaction, FilterType, ErrorTransaction, Result} from "@/features/types/types";

type AppState = {
  transactions: Transaction[];
  visibleTransactions: Transaction[];
  errorsTransactions: ErrorTransaction[];
  filterTransactions: FilterType;
  searchTransactions: string;
  result: Result;
}

type Action =
  | { type: 'SET_TRANSACTIONS'; payload: Transaction[] }
  | { type: 'SET_VISIBLE_TRANSACTIONS'; payload: Transaction[] }
  | { type: 'SET_TRANSACTIONS_ERRORS'; payload: ErrorTransaction }
  | { type: 'CLEAR_TRANSACTIONS_ERRORS'; }
  | { type: 'SET_RESULT'; payload: Partial<Result> }

export default function useAppState() {

  const initialState: AppState = {
    transactions: [],
    visibleTransactions: [],
    errorsTransactions: [],
    filterTransactions: 'all',
    searchTransactions: '',
    result: {
      incomeTotal: 0,
      expenseTotal: 0,
      netResult: 0
    }
  }

  const reducer = (draft: AppState, action: Action) => {
    switch (action.type) {
      case 'SET_TRANSACTIONS':
        draft.transactions = action.payload
        return

      case 'SET_VISIBLE_TRANSACTIONS':
        draft.visibleTransactions = action.payload
        return

      case 'SET_TRANSACTIONS_ERRORS':
        draft.errorsTransactions.push(action.payload)
        return

      case 'CLEAR_TRANSACTIONS_ERRORS':
        draft.errorsTransactions = []
        return

      case 'SET_RESULT':
        Object.assign(draft.result, action.payload)
        return
    }
  }

  const [state, dispatch] = useImmerReducer<AppState, Action>(reducer, initialState);

  return {state, dispatch};
}