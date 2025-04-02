import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

const BrowseBooks = () => {
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const books = useSelector((state) => state.books.books);

  const filteredBooks = books.filter((book) => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery) || 
                         book.author.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-books">
      <SearchBar onSearch={setSearchQuery} />
      <div className="book-grid">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;