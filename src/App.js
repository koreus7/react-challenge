import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import SearchBox from './components/SearchBox.js';
import BookListContainer from './containers/BookListContainer.js';
import PaginationContainer from './containers/PaginationContainer.js';
import store from './redux/store'
import './scss/custom.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <SearchBox/>
          <BookListContainer/>
          <PaginationContainer currentPage={"1"} maximumPages={10}/>
      </Provider>
    );
  }
}
export default App;