import React, { Component } from "react";
import ReactDOM from "react-dom";
import LoadingIndicator from './LoadingIndicator';
import BookListItem from './BookListItem';
import FailedToLoadBooks from "./FailedToLoadBooks";
import URLService from "../services/URLService";


class BookList extends Component {

    constructor(props) {
        super(props);
        this.getBooks = this.getBooks.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    componentDidMount() {
        window.addEventListener("hashchange", () => {
            this.getBooks();
        }, false);
        this.getBooks();
    }

    getBooks() {
        const { page, filter } = URLService.getCurrentParams();
        this.props.fetchBooks(page, filter || undefined);
    }

    renderContent() {
        const { books, areBooksLoading, booksFailedToLoad } = this.props;
        if(areBooksLoading) { return <LoadingIndicator/> }
        if(booksFailedToLoad) { return <FailedToLoadBooks/> }
        return books.map(book => {
            return (
                <li className="list-group-item" key={book.id}>
                    <BookListItem data={book}/>
                </li>
            )
        });
    }

    render() {
        return (
            <ul className="list-group">
              {this.renderContent()}
            </ul>
        );
    }

}

export default BookList;