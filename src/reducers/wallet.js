import {
  GET_CURRENCIES,
  GET_CURRENCIES_ERROR,
  GET_CURRENCIES_LIST_SUCCESS,
  GET_CURRENCIES_DATA_SUCCESS,
  DELETE_EXPENSE,
  EDIT_EXPENSE_CLICK,
  SAVE_EDITED_EXPENSE,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
  loading: false,
  error: null,
  formType: 'add',
  editableExpense: '',
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, loading: true };
  case GET_CURRENCIES_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  case GET_CURRENCIES_LIST_SUCCESS:
    return {
      ...state,
      loading: false,
      currencies: action.currenciesList,
    };
  case GET_CURRENCIES_DATA_SUCCESS:
    return {
      ...state,
      loading: false,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        ...action.newExpense,
      }],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: action.updatedExpenses,
    };
  case EDIT_EXPENSE_CLICK:
    return {
      ...state,
      formType: 'edit',
      editableExpense: action.exp,
    };
  case SAVE_EDITED_EXPENSE:
    return {
      ...state,
      expenses: action.editedExpenses,
      formType: 'add',
    };
  default:
    return state;
  }
};

export default wallet;
