const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes";
export const getBooksWithQuery = (q, maxResults = 5) => {
  return new Promise((resolve, reject) => {
    fetch(`${GOOGLE_BOOKS_API}?q=${q}&maxResults=${maxResults}`)
      .then(respons => respons.json())
      .then(result => resolve(result))
      .catch(e => reject(e));
  });
}