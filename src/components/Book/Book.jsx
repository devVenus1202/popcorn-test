import React from "react";
import PropTypes from 'prop-types';

export default function Book({info, onAddReadingList}) {
  const { volumeInfo: { title, authors, publisher, publishedDate} } = info;
  return (
    <div className="book-item-wrapper">
      <div className="title"> 
        {title}
      </div>
      <div className="authors">
        {authors && authors.join(",")}
      </div>
      <div className="publisher">
        {publisher}
      </div>
      <div className="publishing-date">
        {publishedDate}
      </div>
      <button name="Add" onClick={() => onAddReadingList(info)}>Add To Reading List</button>
    </div>
  )
}
Book.propTypes = {
  info: PropTypes.object.isRequired,
  onAddReadingList: PropTypes.func.isRequired
}
Book.defaultProps = {
  info: {},
  onAddReadingList: () => {}
}