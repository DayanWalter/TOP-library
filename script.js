const lordOfTheRings = new Book("The Lord of the Rings", "R.R.Tolkien", "1000", true)
const lordOfTheRings2 = new Book("The Lord of the Rings 2", "R.R.Tolkien", "2000", false)

let myLibrary = [lordOfTheRings, lordOfTheRings2];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
  }
}



function addBookToLibrary(title, author, pages, read){
    const bookTitle = new Book(title, author, pages, read)
    return myLibrary.push(bookTitle)
}