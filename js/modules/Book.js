import Storage from './Storage.js';

class Book {
  DATA_KEY = 'books';

  static #booksDataFromLocalStorage;

  constructor(bookId, bookTitle, bookAuthor) {
    this.bookId = bookId;
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.store = new Storage(this.DATA_KEY);
  }

  static get getStoredDataFromStorage() {
    return Storage.getBooksDataFromLocalStorage();
  }

  static addBookToStorage(bookDetails) {
    this.#booksDataFromLocalStorage = Storage.getBooksDataFromLocalStorage();

    if (!this.#booksDataFromLocalStorage) {
      this.newData = [];
      this.newData.push(bookDetails);
      Storage.saveBooksDataToLocalStorage(this.newData);
      return;
    }

    this.updatedData = [...Storage.getBooksDataFromLocalStorage()];
    this.updatedData.push(bookDetails);
    Storage.saveBooksDataToLocalStorage(this.updatedData);
  }

  static removeBookFromStorage(bookId) {
    const dataFromStore = Storage.getBooksDataFromLocalStorage();
    const updatedData = dataFromStore.filter((book) => book.bookId !== bookId);
    Storage.saveBooksDataToLocalStorage(updatedData);
  }
}

export default Book;