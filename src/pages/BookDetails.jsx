import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { bookId } = useParams();
  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === parseInt(bookId))
  );

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <h3>By {book.author}</h3>
      <p>Category: {book.category}</p>
      <p>Rating: {book.rating}/5</p>
      <p>{book.description}</p>
      <Link to="/books" className="back-button">Back to Browse</Link>
    </div>
  );
};

export default BookDetails;