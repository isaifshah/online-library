import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>By {book.author}</p>
      <p>Category: {book.category}</p>
      <Link to={`/books/details/${book.id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;