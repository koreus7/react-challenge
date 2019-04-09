import { BOOKS_LOADING_FAILURE, BOOKS_LOADING_SUCCESS } from "../ActionTypes";

const initialState = {
    currentBooks: [],
    booksFailedToLoad: false,
    totalNumberOfBooks: 0
};

const BookReducer = (state = initialState, action) => {
    switch(action.type) {
    case BOOKS_LOADING_SUCCESS:
      return {
        ...state,
        booksFailedToLoad: false,
        totalNumberOfBooks: action.totalNumberOfBooks,
        currentBooks: action.books
      };
    case BOOKS_LOADING_FAILURE:
      return {
          ...state,
          currentBooks: [],
          totalNumberOfBooks: 0,
          booksFailedToLoad: true
      }
    default:
      return state;
    }
  };
  
export default BookReducer;
