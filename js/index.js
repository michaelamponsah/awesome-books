import Book from './modules/Book.js';
import getDateAndTime from './modules/getDate.js';
import handleActiveLink from './modules/handleActiveLink.js';
import handleDataDisplay from './modules/handleDataDisplay.js';
import handleSectionDisplay from './modules/handleSectionDisplay.js';
import handleTitleChange from './modules/handleTitleChange.js';
import getUniqueIdentifier from './modules/uniqueIdGenerator.js';

const addBookForm = document.querySelector('#addBook');

window.onload = (handleDataDisplay());

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#book-title');
  const author = document.querySelector('#author-name');
  const cardId = getUniqueIdentifier();

  const newBookInstance = new Book(cardId, title.value, author.value);
  Book.addBookToStorage(newBookInstance);
  window.location.reload();
});

document.addEventListener('click', (e) => {
  const isRemoveBtn = document.querySelector('[data-remove-btn]');
  const isNavItem = document.querySelector('.nav-item');
  const booksCollection = document.querySelector('.book-author-collections');
  const addForm = document.querySelector('.form-wrapper');
  const contactSection = document.querySelector('.contact-section');
  const sectionTitle = document.querySelector('.title');

  if (isRemoveBtn && e.target.closest('.book-author--card') && e.target.classList.contains('btn-remove')) {
    const card = e.target.closest('.book-author--card');
    const cardId = card.getAttribute('id');
    Book.removeBookFromStorage(cardId);
    window.location.reload();
  }

  if (isNavItem && e.target.hasAttribute('data-list')) {
    handleActiveLink('data-list', 'data-add-new', 'data-contact');
    handleSectionDisplay(addForm, 'none');
    handleSectionDisplay(contactSection, 'none');
    handleSectionDisplay(booksCollection, 'block');
  }

  if (isNavItem && e.target.hasAttribute('data-add-new')) {
    handleActiveLink('data-add-new', 'data-contact', 'data-list');
    handleSectionDisplay(booksCollection, 'none');
    handleSectionDisplay(contactSection, 'none');
    handleTitleChange(sectionTitle, 'Add a new book');
    handleSectionDisplay(addForm, 'flex');
  }

  if (isNavItem && e.target.hasAttribute('data-contact')) {
    handleActiveLink('data-contact', 'data-add-new', 'data-list');
    handleSectionDisplay(booksCollection, 'none');
    handleSectionDisplay(addForm, 'none');
    handleTitleChange(sectionTitle, 'Contact Information');
    handleSectionDisplay(contactSection, 'flex');
  }
});

const dateTimeWrapper = document.querySelector('.date-time-wrapper');
dateTimeWrapper.innerText = getDateAndTime();