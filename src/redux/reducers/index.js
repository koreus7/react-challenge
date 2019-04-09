import { combineReducers } from 'redux';
import books from './BookReducer';
import loading from './LoadingReducer';
import config from './ConfigReducer';

const appStore = combineReducers({
    books,
    loading,
    config
});
  
export default appStore;