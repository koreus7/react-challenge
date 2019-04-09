import React, { Component } from "react";
import ReactDOM from "react-dom";
import URLService from '../services/URLService';

class Pagination extends Component {

  constructor(props) {
    super(props);
    this.state = {
      baseHash: "#"
    };
    this.updateBaseHash = this.updateBaseHash.bind(this);
    this.createLink = this.createLink.bind(this);
    this.generatePageButton = this.generatePageButton.bind(this);
    this.generateButtons = this.generateButtons.bind(this);
  }

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.updateBaseHash();
    }, false);
    this.updateBaseHash()
  }

  updateBaseHash() {
    this.setState({
      baseHash: location.hash
    });
  }

  createLink(pageNumber) {
    const { baseHash } = this.state;
    return URLService.addParametersToURLHash(baseHash, {page: pageNumber});
  }

  generatePageButton(isDisabled, text, pageNumber, active) {
    const { createLink } = this;
    let className = "page-item"
    if (isDisabled) { className += " disabled "}
    if (active) { className += " active" }
    return (
      <li key={pageNumber + text} className={className}>
        <a className="page-link" href={createLink(pageNumber)}>{text}</a>
      </li>
    );
  }

  generateButtons(currentPage) {
    const { generatePageButton } = this;
    const { books, booksFailedToLoad, totalNumberOfBooks, booksPerPage, maximumPages } = this.props;
    const numberOfPages = Math.floor(totalNumberOfBooks/booksPerPage);
    const previousDisabled = currentPage <= 1 || booksFailedToLoad
    const nextDisabled = currentPage + 1 >= numberOfPages || booksFailedToLoad || books && books.length == 0;
    const buttons = [];
    let start = 1
    let end = numberOfPages;
    // Generate page buttons around the selected page.
    if(numberOfPages > maximumPages) {
      start = Math.max(currentPage - Math.floor(maximumPages/2), 1);
      end = Math.min(currentPage + Math.floor(maximumPages/2), numberOfPages);
    }
    const numberPage = (number, active) => generatePageButton(false, number.toString(), number, active);
    buttons.push(generatePageButton(previousDisabled, "<<", 1, false));
    buttons.push(generatePageButton(previousDisabled, "<", currentPage - 1, false));
    for(let i = start; i < end ; i++) {
      buttons.push(numberPage(i, i == currentPage));
    }
    buttons.push(generatePageButton(nextDisabled, ">", currentPage + 1, false));
    buttons.push(generatePageButton(nextDisabled, ">>", numberOfPages - 1, false));
    return buttons;
  }

  render() {
    const params = URLService.getCurrentParams();
    const currentPage = parseInt(params.page) || 1;
    return (
    <div className="card fixed-bottom">
      <div className="card-body">
        <nav aria-label="page navigation">
          <ul className="pagination react-challenge-pagination">
            {this.generateButtons(currentPage)}
          </ul>
        </nav> 
      </div>
    </div>
      );
    }
    
  }
  
  export default Pagination;