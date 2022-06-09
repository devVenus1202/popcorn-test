import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom';
import { getBooksWithQuery } from '../../apis'
import Book from '../../components/Book';
import { useReadingList } from '../../contexts/ReadingListContext';
import { debounce } from "lodash"
import "./style.css";
export default function Books() {
  const [searchKey, setSearchKey] = useState("");
  const { setBookForReadingList, checkReadingList } = useReadingList();
  const [books, setBooks] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const handleChange = debounce((e) => {
    setSearchKey(e.target.value);
    getBooksWithQuery(e.target.value).then((res) => {
      console.log("res", res)
      setBooks(res.items);
      setTotalItems(res.totalItems);
    }).catch(e => {
      console.log("errro",e);
      setBooks([]);
      setTotalItems(0);
    });
  }, 300);

  const addToReadingList = useCallback((book) => {
    setBookForReadingList(book);
  }, []);
  return (
    <div className="container">
      <div className="books-subheader">
        <h2>Search Books</h2>
        <Link to={'/reading-list'}>Reading List</Link>
      </div>
     
      <div className="search-wrapper">
        <input onChange={handleChange} />
      </div>
      
      <p>Total results: {totalItems}</p>
      <div className="results-wrapper">
        {!searchKey && <div className="no-results">Please type to search</div>}
        {books && books.map(book => <Book key={book.id} info={book} onAddReadingList={addToReadingList} readingList={checkReadingList(book.id)} />)}
      </div>
    </div>
  )
}
