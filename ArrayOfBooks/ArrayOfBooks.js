const bookData = [
    ["The Great Gatsby", "978-0743273565", "F. Scott Fitzgerald", 180],
    ["1984", "978-0451524935", "George Orwell", 328],
    ["To Kill a Mockingbird", "978-0061120084", "Harper Lee", 281],
    ["The Catcher in the Rye", "978-0316769488", "J.D. Salinger", 277],
    ["Pride and Prejudice", "978-1503290563", "Jane Austen", 279]
];


class Book {
    constructor(title, isbn, author, pages) {
        this.title = title;
        this.isbn = isbn;
        this.author = author;
        this.pages = pages;
    }
}


const books = bookData.map(bookArray => new Book(...bookArray));


books.forEach(book => {
    console.log(`Title: ${book.title}, ISBN: ${book.isbn}, Author: ${book.author}, Pages: ${book.pages}`);
});
