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
    const fee = days * 0.25;

    return Math.ceil(fee);
  };

}

module.exports = Librarian;