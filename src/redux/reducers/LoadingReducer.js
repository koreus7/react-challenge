import { SET_BOOKS_LOADING } from "../ActionTypes";

const initialState = {
    areBooksLoading: false
};

const LoadingReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_BOOKS_LOADING:
      return {
        ...state,
        areBooksLoading: action.areBooksLoading
      };
    default:
      return state;
    }
  };
  
export default LoadingReducer;
  