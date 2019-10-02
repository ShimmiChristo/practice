// Object Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
const book = new Book('BOOK TITLE', 'Book author', 'book year');
console.log(book);

Book.prototype.getSummary = function() {
  return `${this.title} - written by: ${this.author}`;
};
console.log(book);
console.log(book.getSummary());

// Inheritance
function Magazine(title, author, year) {
  Book.call(this, title, author, year);
}
Magazine.prototype = Object.create(Book.prototype);
const mag = new Magazine('mag title', 'mag author', 'mag year');
Magazine.prototype.constructor = Book;
console.log(mag);

// ES6 Classes
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} - written by: ${this.author}`;
  }
  // static method
  static topBookStore() {
    return 'Barnes & Nobles';
  }
}
// Instatiate an object
const book = new Book('class title', 'class author', 'class year');
console.log(book);
// static method does not need to be instatiated
console.log(Book.topBookStore());

// Subclasses - like react
class Magazine extends Book {
  constructor(title, author, year) {
    super(title, author, year);
  }
  static topMagazine() {
    return 'People Magazine';
  }
}
// Instatiate an object
const mag = new Magazine('class mag', 'class mag author', 'class mag year');
console.log(mag);
console.log(Magazine.topMagazine());
