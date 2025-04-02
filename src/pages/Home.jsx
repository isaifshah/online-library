import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import { dummyBooks } from '../data/dummyBooks';

const Home = () => {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "History"];
  const popularBooks = dummyBooks.slice(0, 3);

  return (
    <div className="home">
      <h1>Welcome to Our Online Library</h1>
      
      <div className="categories">
        {categories.map((category) => (
          <Link key={category} to={`/books/${category}`} className="category-tag">
            {category}
          </Link>
        ))}
      </div>

      <h2>Popular Books</h2>
      <div className="book-list">
        {popularBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;