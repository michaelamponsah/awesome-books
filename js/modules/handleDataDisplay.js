import Book from './Book.js';
import bookCardBuilder from './bookCardBuilder.js';

const cardsDiv = document.querySelector('.book-author-collections');

const handleDataDisplay = () => {
  const booksData = Book.getStoredDataFromStorage;
  if (!booksData || booksData.length === 0) {
    cardsDiv.innerHTML += '<p>No data to display...</p>';
    return;
  }

  booksData.forEach((book) => {
    const bookCard = bookCardBuilder(book);
    cardsDiv.insertAdjacentHTML('afterbegin', bookCard);
  });
};

export default handleDataDisplay;