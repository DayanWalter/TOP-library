function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.index = myLibrary.length;
  this.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
  }
}
let myLibrary = [];

// function for adding a book-object to the library-array
function addBookToLibrary(title, author, pages, read){
    const bookTitle = new Book(title, author, pages, read)
    return myLibrary.push(bookTitle)
}
// display the books from the array in a table
let archiveTable = document.getElementById("archive-table");

for (let i = 0; i < myLibrary.length; i++) {
  let book = myLibrary[i];

  let newRow = archiveTable.insertRow();

  let titleCell = newRow.insertCell();
  titleCell.textContent = book.title;

  let authorCell = newRow.insertCell();
  authorCell.textContent = book.author;

  let pagesCell = newRow.insertCell();
  pagesCell.textContent = book.pages;

  let readCell = newRow.insertCell();
  readCell.textContent = book.read;
}
// form.style.display = "none";

// toggle Button for the "NEW BOOK"-Form
const btn = document.getElementById("addButton");
btn.addEventListener("click", () => {
  const form = document.getElementById("form");

  if(form.style.display === "none"){
    form.style.display = "block";
  }else{
    form.style.display = "none";
  }
})

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  // Read form-field
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.querySelector('input[name="read_radio"]:checked').value;
  let index = myLibrary.length;

  // add newRow to table
  let archiveTable = document.getElementById('archive-table');

  let newRow = archiveTable.insertRow();

  let titleCell = newRow.insertCell();
  let authorCell = newRow.insertCell();
  let pagesCell = newRow.insertCell();
  let readCell = newRow.insertCell();
  let indexCell = newRow.insertCell();

  titleCell.innerHTML = title;
  authorCell.innerHTML = author;
  pagesCell.innerHTML = pages;
  readCell.innerHTML = read;
  indexCell.innerHTML = index;

  addBookToLibrary(title, author, pages, read);

  // reset form
  document.getElementById('form').reset();
});