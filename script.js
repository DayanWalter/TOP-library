class Book{
  constructor(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
  // class-body for methods
  info(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
  }
}

let lotr = new Book("Title", "Author", "pages", "yes");

let myLibrary = [lotr];

// function for adding a book-object to the library-array
function addBookToLibrary(title, author, pages, read){
    const bookTitle = new Book(title, author, pages, read)
    myLibrary.push(bookTitle)
    updateIndexes();
}