const createLibrary = (library) => {
  return {
    name: library,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
};

const addBook = (library, book) => {
  return library.shelves[book.genre].push(book);
};

const checkoutBook = (library, title, genre) => {
  // I think this is probably the best way to solve this but I may want to revisit it to see if I can dry it up since I have the same return in two separate spots
  if (library.shelves[genre].length) {
    for (let i = 0; i < library.shelves[genre].length; i++) {
      if (library.shelves[genre][i].title === title) {
        library.shelves[genre].splice(i, 1);
        return `You have now checked out ${title} from the ${library.name}`;
      }
      return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};