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
//example book for visibility purpose
let lotr = new Book("Lord of the Rings", "Tolkien", "1000", "true");

// array for Book-object storage
let myLibrary = [lotr];

// function for adding a Book-object to the library-array
function addBookToLibrary(){
  // get values from the Add-Form input fields
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.querySelector('input[name="read_radio"]:checked').value; 

  // create new Book-object and...
  const newBook = new Book(title, author, pages, read)
  // ...add to library...
  myLibrary.push(newBook)
  //...and refresh immediatly:
  refreshTable();
}
function updateIndex() {
  myLibrary.forEach((book, index) => {
    book.index = index;
  });
}
// after clicking addBookButton
addForm.addEventListener('submit', function(event) {
  // prevent default behaviour after clicking addBookButton(submit-button)
  event.preventDefault(); 
  //invoke function for adding a new book
  addBookToLibrary();
});

let arrayTable = document.getElementById("array-table");
// function to refresh the table
function refreshTable(){
    //delete everything in the table, except the header(index 0)
    while (arrayTable.rows.length > 1) {
      arrayTable.deleteRow(1);
    }
    // after deletion, update the index of every object
    updateIndex();
    // add every object in the array to the table
    for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    let newRow = arrayTable.insertRow();

    let titleCell = newRow.insertCell();
    titleCell.textContent = book.title;

    let authorCell = newRow.insertCell();
    authorCell.textContent = book.author;

    let pagesCell = newRow.insertCell();
    pagesCell.textContent = book.pages;

    let readCell = newRow.insertCell();
    readCell.textContent = book.read;

    let indexCell = newRow.insertCell();
    indexCell.textContent = book.index;
  }
}
// refreshButton wired with function
let refreshButton = document.getElementById("refreshButton")
refreshButton.addEventListener("click", refreshTable)


// toggle-visibility
let newBookButton = document.getElementById("newBookButton");

//default: display:"none"
addForm.style.display = "none";

// toggle Button for the "New Book"-Form
newBookButton.addEventListener("click", () => {
  let form = document.getElementById("addForm");

  if(form.style.display === "none"){
    form.style.display = "block";
  }else{
    form.style.display = "none";
  }
})

// delete book

function deleteBookFromLibrary(event){
  event.preventDefault();

  let index = document.getElementById('deleteIndex').value;

  myLibrary.splice(index, 1)
}

let deleteBookButton = document.getElementById("deleteBookButton")
deleteBookButton.addEventListener("submit", deleteBookFromLibrary)


  // reset form
  // document.getElementById('addForm').reset();


  // addForm.style.display = "none";

// // toggle Button for the "DELETE BOOK"-Form
// const deleteButton = document.getElementById("deleteButton");
// deleteButton.addEventListener("click", () => {
//   const form = document.getElementById("deleteForm");

//   if(form.style.display === "none"){
//     form.style.display = "block";
//   }else{
//     form.style.display = "none";
//   }
// })


// document.getElementById('deleteForm').addEventListener('submit', function(event) {
//   event.preventDefault(); 
  
//   // Read form-field

//   // delete Row from table
//   let archiveTable = document.getElementById('archive-table');

//   archiveTable.deleteRow(Number(index) + 1);

//   deleteBookFromLibrary(index);


//   // reset form
//   document.getElementById('deleteForm').reset();
// });


