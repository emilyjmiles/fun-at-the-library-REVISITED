const shelfBook = (book, shelf) => {
  if (shelf.length < 3) {
    return shelf.unshift(book);
  }
};

const unshelfBook = (title, shelf) => {
  // for (let i = 0; i < shelf.length; i++) {
  //   if (shelf[i].title === title) {
  //     shelf.splice(i, 1);
  //   }
  // } <--- keep this commented out code block for future reference

  shelf.filter((book, index) => {
    if (book.title === title) {
      shelf.splice(index, 1);
    }
  });

  return shelf;
};

const listTitles = (shelf) => {
  const test = shelf.map(book => book.title);
  return `${test.join(', ')}`;

};

const searchShelf = (shelf, title) => {
  let onShelf;
  // for (let i = 0; i < shelf.length; i++) {
  //   onShelf = shelf[i].title === title;
  // } <--- keep this commented out code block for future reference

  shelf.forEach(book => onShelf = book.title === title);

  return onShelf;
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};