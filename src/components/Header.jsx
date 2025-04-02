import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="/books">Browse Books</Link>
      <Link to="/add-book">Add Book</Link>
    </nav>
  );
};

export default Header;