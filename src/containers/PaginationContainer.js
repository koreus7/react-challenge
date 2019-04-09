import { connect } from 'react-redux';
import Pagination from '../components/Pagination';

const mapStateToProps = (state) => {
    return {
        books: state.books.currentBooks,
        booksFailedToLoad: state.books.booksFailedToLoad,
        totalNumberOfBooks: state.books.totalNumberOfBooks,
        booksPerPage: state.config.booksPerPage
    }
};

export default connect(mapStateToProps, {})(Pagination);
