import BookEndpointService from '../services/BookEndpointService';
import { BOOKS_LOADING_SUCCESS, BOOKS_LOADING_FAILURE } from '../ActionTypes';
import { setBooksLoading } from './LoadingActions';
import bookDataTransform from '../DataTransforms/BookDataTransform';

export const fetchBooks = (page, filter) => {
    return (dispatch, getState) => {
        const state = getState();
        const { apiUrl, booksPerPage } = state.config;
        dispatch(setBooksLoading(true));
        BookEndpointService.getBooks(apiUrl, page, booksPerPage, filter, (err, res) => {
            if (!err && res && res.data && res.data.books) {
                const books = res.data.books.map(bookDataTransform);
                const totalNumberOfBooks = res.data.count
                dispatch(booksLoadingSuccess(totalNumberOfBooks, books));
            } else {
                dispatch(booksLoadingFailure());
            }
            dispatch(setBooksLoading(false));
        });
    }
}

const booksLoadingSuccess = (totalNumberOfBooks, books) => {
    return {
      type: BOOKS_LOADING_SUCCESS,
      totalNumberOfBooks,
      books
    };
};

const booksLoadingFailure = () => {
    return {
      type: BOOKS_LOADING_FAILURE
    };
};
