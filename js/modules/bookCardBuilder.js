const bookCardBuilder = (data) => {
  const { bookId, bookTitle, bookAuthor } = data;
  const card = `
      <div class="book-author--card row" id="${bookId}">
        <div>
          <p>"${bookTitle}" by ${bookAuthor}</p>
        </div>
        <button type="button" class="btn btn-remove" data-remove-btn id="btnRemove">Remove</button>
      </div>
  `;
  return card;
};

export default bookCardBuilder;