const createTitle = (title) => {
  return `The ${title}`;
};

const buildMainCharacter = (name, age, pronouns) => {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  };
};

const saveReview = (newReview, allReviews) => {
  if (!allReviews.includes(newReview)) {
    allReviews.push(newReview);
  }

  return allReviews.length;
};

const calculatePageCount = (bookTitle) => {
  return bookTitle.length * 20;
};

const writeBook = (title, character, genre) => {
  return {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  };
};

const editBook = (book) => {
  book.pageCount = calculatePageCount(book.title) * 0.75;

  return book.pageCount;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
};