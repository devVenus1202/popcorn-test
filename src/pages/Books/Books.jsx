import React, { useCallback, useState } from 'react'
import { getBooksWithQuery } from '../../apis'
import Book from '../../components/Book';
import { useReadingList } from '../../contexts/ReadingListContext';

export default function Books() {
  const [searchKey, setSearchKey] = useState("");
  const { setBookForReadingList, checkReadingList } = useReadingList();
  const [books, setBooks] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const handleChange = (e) => {
    getBooksWithQuery(e.target.value).then((res) => {
      console.log("res", res)
      setBooks(res.items);
      setTotalItems(res.totalItems);
    }).catch(e => {
      console.log("errro",e);
      setBooks([]);
      setTotalItems(0);
    });
  }

  const addToReadingList = useCallback((book) => {
    setBookForReadingList(book);
  }, []);
  return (
    <div>
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
