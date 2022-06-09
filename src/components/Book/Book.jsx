import React from "react";
import PropTypes from "prop-types";
import "./style.css";
export default function Book({ info, onAddReadingList, readingList }) {
  const {
    volumeInfo: { title, authors, publisher, publishedDate },
  } = info;
  return (
    <div className="book-item-wrapper">
      <h3 className="title">{title}</h3>
      <img src=""/>
      <p className="authors"><b>Authors:</b>{authors && authors.join(",")}</p>
      <p className="publisher"><b>Publisher:</b>{publisher}</p>
      <p className="publishing-date"><b>Published Date:</b>{publishedDate}</p>
      <button name="Add" onClick={() => onAddReadingList(info)}>
        {!readingList ? "Add To Reading List" : "Remove From Reading List"}
      </button>
    </div>
  );
}
Book.propTypes = {
  info: PropTypes.object.isRequired,
  readingList: PropTypes.bool.isRequired,
  onAddReadingList: PropTypes.func.isRequired,
};
Book.defaultProps = {
  info: {},
  readingList: false,
  onAddReadingList: () => {},
};
