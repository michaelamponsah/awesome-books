class Storage {
  constructor(dataKey) {
    this.data_key = dataKey;
  }

  static getBooksDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.data_key));
  }

  static saveBooksDataToLocalStorage(data) {
    localStorage.setItem(this.data_key, JSON.stringify(data));
  }
}

export default Storage;