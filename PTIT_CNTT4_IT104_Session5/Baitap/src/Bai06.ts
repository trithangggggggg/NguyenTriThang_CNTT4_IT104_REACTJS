// class Book{
//     private title:string;
//     private author:string

//     constructor(title:string, author:string){
//         this.title = title;
//         this.author = author;
//     }
//     getInfo(){
//         return `tieu de: ${this.title}, tac gia: ${this.author}`
//     }
// }

// class Libraray{
//     private books:Book[] = [];
//     constructor (){
//         this.books = [];
//     }
//     addBook(book:Book){
//         this.books.push(book);
//     }
//     showBook(){
//         this.books.forEach((book, index)=> {
//             console.log(`${index + 1}. ${book.getInfo()}`);
//         });
//     }
    
// }


// const book1 = new Book("heeloo", "aloo1");
// const book2 = new Book("hi", "aloo2");
// const book3 = new Book("xin chao", "aloo2");
// const book4 = new Book("ohio", "aloo4");
// const book5 = new Book("hajimemashite", "alo5");


// const myLibrary = new Libraray();

// myLibrary.addBook(book1);
// myLibrary.addBook(book2);
// myLibrary.addBook(book3);
// myLibrary.addBook(book4);
// myLibrary.addBook(book5);


// myLibrary.showBook();