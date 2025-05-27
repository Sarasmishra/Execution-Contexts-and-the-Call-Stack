const library = {

books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

// improved version of addBook
  addBook(book) {
    if (
      !book.title?.trim() ||
      !book.author?.trim() ||
      typeof book.year !== "number" ||
      book.year <= 0
    ) {
      console.log("Book information is incomplete or invalid.");
      return;
    }

    const exists = this.books.some(b => b.title === book.title);
    if (exists) {
      console.log(`A book titled "${book.title}" already exists.`);
      return;
    }

    this.books.push(book);
    console.log(`Book titled "${book.title}" added successfully.`);
},
findBookByTitle(title) {

return this.books.find(book => book.title === title);

},

removeBook(title) {

const index = this.books.findIndex(book => book.title === title);

if (index !== -1) {

this.books.splice(index, 1);

} else {

console.log("Book not found.");

} } };

//  here title was missing
library.addBook({ title:"debug addBook",author: "George Orwell", year: 1949 });

console.log(library.books.length);