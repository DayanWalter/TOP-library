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

let contentElement = document.getElementById("content");

for (let i = 0; i < myLibrary.length; i++) {
  let item = myLibrary[i];

  let row = contentElement.insertRow();

  let nameCell = row.insertCell();
  nameCell.textContent = item.title;

  let authorCell = row.insertCell();
  authorCell.textContent = item.author;

  let pagesCell = row.insertCell();
  pagesCell.textContent = item.pages;

  let readCell = row.insertCell();
  readCell.textContent = item.read;
}
form.style.display = "none";

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const form = document.getElementById("form");

  if(form.style.display === "none"){
    form.style.display = "block";
  }else{
    form.style.display = "none";
  }
})