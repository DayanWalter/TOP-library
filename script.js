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

let content = document.getElementById("content")


// Finde das HTML-Element, in dem der Inhalt angezeigt werden soll
let contentElement = document.getElementById("content");

// Durchlaufe das Array und generiere HTML-Elemente für jedes Objekt
for (let i = 0; i < myLibrary.length; i++) {
  let item = myLibrary[i];

  // Erstelle ein <div> Element für das aktuelle Objekt
  let itemElement = document.createElement("div");

  // Setze den Textinhalt des <div> Elements basierend auf den Objektdaten
  itemElement.textContent = "Title: " + item.title + ", Author: " + item.author + ", Pages: " + item.pages + ", read: " + item.read;

  // Füge das <div> Element dem Hauptelement hinzu
  contentElement.appendChild(itemElement);
}
            // const array = [1, 2, 3, 4, 5];

            // const string = JSON.stringify(myLibrary, null, 4);

            // document.querySelector(".output").innerHTML = string;