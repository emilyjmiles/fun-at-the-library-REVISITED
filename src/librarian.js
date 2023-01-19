class Librarian {
  constructor (name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron = (patron, condition) => {
    if (condition) {
      return `Good morning, ${patron}!`;
    }

    return `Hello, ${patron}!`;
  };

  findBook = (title) => {
    const genres = Object.keys(this.library.shelves);
    let returnStatment;

    genres.forEach(genre => {
      this.library.shelves[genre].forEach((book, index) => {
        if (book.title === title) {
          this.library.shelves[genre].splice(index, 1);
          returnStatment = `Yes, we have ${title}`;
        } else {
          returnStatment = `Sorry, we do not have ${title}`;
        }
      });
    });

    return returnStatment;
  };
  calculateLateFee = (days) => {
    // might want to refactor this it make it more dynamic
    // for every 3 days add 1 or something
    // not sure if that would work but it might be worth looking into
    let fee = 0;

    if (days === 3 && days <= 6) {
      return fee + 1;
    }

    return fee + 3;
  };

}

module.exports = Librarian;