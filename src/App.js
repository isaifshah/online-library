import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BrowseBooks />} />
            <Route path="/books/:category" element={<BrowseBooks />} />
            <Route path="/books/details/:bookId" element={<BookDetails />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}

export default App;