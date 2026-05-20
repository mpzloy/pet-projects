import {useImmerReducer} from "use-immer";
import {Transaction, FilterType, ErrorTransaction} from "@/features/types/types";

type AppState = {
  transactions: Transaction[];
  visibleTransactions: Transaction[];
  errorsTransactions: ErrorTransaction[];
  filterTransactions: FilterType;
  searchTransactions: string;
}

type Action =
  | { type: 'SET_TRANSACTIONS'; payload: Transaction[] }
  | { type: 'SET_VISIBLE_TRANSACTIONS'; payload: Transaction[] }
  | { type: 'SET_TRANSACTIONS_ERRORS'; payload: ErrorTransaction }
  | { type: 'CLEAR_TRANSACTIONS_ERRORS'; }

export default function useAppState() {

  const initialState: AppState = {
    transactions: [],
    visibleTransactions: [],
    errorsTransactions: [],
    filterTransactions: 'all',
    searchTransactions: ''
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
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return {state, dispatch};
}