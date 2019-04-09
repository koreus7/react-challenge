import React, { Component } from "react";
import ReactDOM from "react-dom";

class BookListItem extends Component {

    render() {
        const { title, author, publicationYear} = this.props.data;
        return (
            <div className="card">
                <div className="card-body">
                    {`${title} - ${author} [${publicationYear}]`}
                </div>
            </div>
        );
    }

}

export default BookListItem;