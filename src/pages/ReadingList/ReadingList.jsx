import React from "react";
import { Link } from "react-router-dom";
import Book from "../../components/Book";
import { useReadingList } from "../../contexts/ReadingListContext";

export default function ReadingList() {
  const { readingList, setBookForReadingList, checkReadingList } =
    useReadingList();
  console.log("readingList", readingList);
  return (
    <div className="container">
      <Link to={'/'}>Go to main</Link>
      <h2>Reading List</h2>
      {readingList &&
        readingList.map((book) => (
          <Book
            key={book.id}
            info={book}
            onAddReadingList={setBookForReadingList}
            readingList={checkReadingList(book.id)}
          ></Book>
        ))}
    </div>
  );
}
