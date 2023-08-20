class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  // class-body for methods
  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }
  toggleRead() {
    if (this.read === 'yes') {
      this.read = 'no';
    } else {
      this.read = 'yes';
    }
  }
}

// example book for visibility purpose
// let lotr = new Book("Lord of the Rings", "Tolkien", "1000", "yes");

// array for Book-object storage
let myLibrary = [];

// function for adding a Book-object to the library-array
function addBookToLibrary() {
  // get values from the addForm input fields
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.querySelector('input[name="read_radio"]:checked').value;

  // create new Book-object and...
  const newBook = new Book(title, author, pages, read);

  // ...add to library...
  myLibrary.push(newBook);

  // ...and refresh immediatly:
  refreshTable();
}

function updateIndex() {
  myLibrary.forEach((book, index) => {
    book.index = index;
  });
}

// after clicking addBookButton
addForm.addEventListener('submit', function (event) {
  // prevent default behaviour after clicking addBookButton(submit-button)
  event.preventDefault();

  // invoke function for adding a new book
  addBookToLibrary();
});

let arrayTable = document.getElementById('array-table');

// function to refresh the table
function refreshTable() {
  // delete everything in the table, except the header(index = 0)
  while (arrayTable.rows.length > 1) {
    arrayTable.deleteRow(1);
  }

  // after deletion, update the index of every object
  updateIndex();

  // add every object from the array into the table
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

    // insert a cell with a toggle button
    let toggleCell = newRow.insertCell();
    let toggleButton = document.createElement('button');
    toggleButton.textContent = 'Change';
    toggleButton.className = 'toggle-button';
    toggleCell.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
      // invoke function on book(myLibrary[i])
      book.toggleRead();
      // refresh the table
      refreshTable();
    });

    // insert a cell with a delete button
    let deleteCell = newRow.insertCell();
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteCell.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
      // delete element at book.index
      myLibrary.splice(book.index, 1);
      // refresh the table
      refreshTable();
    });
  }
}

// refreshButton wired with function
let refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', refreshTable);

// toggle-visibility
let newBookButton = document.getElementById('newBookButton');

// default: display:"none"
container.style.display = 'none';

// toggle Button for the "New Book"-Form
newBookButton.addEventListener('click', () => {
  if (container.style.display === 'none') {
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }
});

// resetButton for addForm
let resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
  document.getElementById('addForm').reset();
});
