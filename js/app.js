var books= document.querySelecgorAll('#book-list li .name');

Array.from(books).forEach(fucntion(book){
    book.textContent+= ' (book title)';
}):

const bookList = document.querySelector('#book-list');
// console.log(bookList.innerHTML)
bookList.innerHTML += '<p>This is how you add HTML</p>';