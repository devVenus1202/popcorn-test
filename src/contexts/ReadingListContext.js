import React, { createContext, useState, useContext } from "react";

export const ReadingListContext = createContext();
const READINGLIST = "reading-list";

const ReadingListContextProvider = (props) => {
  const initialContent = localStorage.getItem(READINGLIST);
  const [readingList, setReadingList] = useState(
    initialContent ? JSON.parse(initialContent) : []
  );
  return (
    <ReadingListContext.Provider value={{ readingList, setReadingList }}>
      {props.children}
    </ReadingListContext.Provider>
  );
};

export const useReadingList = () => {
  const { readingList, setReadingList } = useContext(ReadingListContext);
  const setBookForReadingList = (book) => {
    const currentIndex = readingList.findIndex((b) => b.id === book.id);
    if (currentIndex < 0) {
      readingList.push(book);
      setReadingList([...readingList]);
    } else {
      readingList.splice(currentIndex, 1);
      setReadingList([...readingList]);
    }
    localStorage.setItem(READINGLIST, JSON.stringify(readingList));
  };
  const checkReadingList = (bookId) => {
    const currentIndex = readingList.findIndex((b) => b.id === bookId);
    return currentIndex >= 0;
  }
  return { readingList, setBookForReadingList, checkReadingList };
};
export default ReadingListContextProvider;
