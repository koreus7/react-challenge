import { SET_BOOKS_LOADING } from '../ActionTypes';

export const setBooksLoading = (areBooksLoading) => {
    return {
        type: SET_BOOKS_LOADING,
        areBooksLoading
    }
};
