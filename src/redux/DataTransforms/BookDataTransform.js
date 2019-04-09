const bookDataTransform = (book) => ({
    author: book.book_author || "Unknown Author",
    publicationCity: book.book_publication_city || "Unknown",
    publicationCountry: book.book_publication_country || "Unknown",
    publicationYear: book.book_publication_year || "Unknown",
    pages: book.book_pages || "N/A",
    title: book.book_title || "Title",
    id: book.id
});

export default bookDataTransform;
