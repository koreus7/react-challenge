import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import logger from "redux-logger";
import reducer from "./reducers";

// We would get this config from a bootstrap endpoint in prod, for the purposes of demonstration.
const initialState = {
    config: {
        apiUrl: "http://nyx.vima.ekt.gr:3000",
        booksPerPage: 5
    },
    books: {
        currentBooks: []
    }
};

const middleware = [ thunk, logger ];
const enhancers = [applyMiddleware(...middleware)];
const store = createStore(reducer, initialState, compose(...enhancers));

export default store;