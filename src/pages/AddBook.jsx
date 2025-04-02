import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: 'Fiction',
    description: '',
    rating: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...formData, id: Date.now() }));
    navigate('/books');
  };

  return (
    <form className="add-book-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        required
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        required
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
      />
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      >
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="History">History</option>
      </select>
      <textarea
        placeholder="Description"
        required
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <input
        type="number"
        min="0"
        max="5"
        step="0.1"
        placeholder="Rating"
        required
        onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;