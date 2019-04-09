import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { fetchBooks } from '../redux/actions/BookActions';


const mapStateToProps = (state) => {
    return {
        books: state.books.currentBooks,
        areBooksLoading: state.loading.areBooksLoading,
        booksFailedToLoad: state.books.booksFailedToLoad
    }
};

export default connect(mapStateToProps, { fetchBooks })(BookList);
