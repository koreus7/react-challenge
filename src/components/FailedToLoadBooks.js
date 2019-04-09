import React, { Component } from "react";
import ReactDOM from "react-dom";

class FailedToLoadBooks extends Component {

    render() {
        return(
        <div className="card">
            <div className="card-body">
                Couldn't find any books.
            </div>
        </div>);
    }

}

export default FailedToLoadBooks;