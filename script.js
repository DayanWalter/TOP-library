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
// function for adding a book-object to the library-array
function addBookToLibrary(title, author, pages, read){
    const bookTitle = new Book(title, author, pages, read)
    return myLibrary.push(bookTitle)
}

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
const btn = document.getElementById("btn");
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
  
  // add newRow to table
  let archiveTable = document.getElementById('archive-table').getElementsByTagName('tbody')[0];
  let newRow = archiveTable.insertRow(archiveTable.rows.length);
  
  let titleCell = newRow.insertCell(0);
  let authorCell = newRow.insertCell(1);
  let pagesCell = newRow.insertCell(2);
  let readCell = newRow.insertCell(3);

  titleCell.innerHTML = title;
  authorCell.innerHTML = author;
  pagesCell.innerHTML = pages;
  readCell.innerHTML = read;
  
  // reset form
  document.getElementById('form').reset();
});