// class Book{
//     private id:number;
//     private title:string;
//     private author:string

//     constructor(id:number ,title:string, author:string){
//         this.id = id;
//         this.title = title;
//         this.author = author;
//     }
//     getInfo(){
//         return `id: ${this.id} tieu de: ${this.title}, tac gia: ${this.author}`
//     }
//     setInfo(title: string, author: string) {
//         this.title = title;
//         this.author = author;
//     }
//     getId(){
//         return this.id;
//     }
//     getTitle() {
//         return this.title;
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
    
//     updateBookById(id: number, newTitle: string, newAuthor: string) {
//         const book = this.books.find(b => b.getId() === id);
//         if (book) {
//             book.setInfo(newTitle, newAuthor);
//             console.log(`da cap nhat sach co ID = ${id}`);
//         } else {
//             console.log(`khong tim thay sach ID = ${id}`);
//         }
//     }
//     searchBookByTitle(title: string) {
//         const foundBooks = this.books.filter(b => b.getTitle().toLowerCase().includes(title.toLowerCase()));
//         if (foundBooks.length > 0) {
//             console.log(`Da tim thay title "${title}":`);
//             foundBooks.forEach(book => console.log(book.getInfo()));
//         } else {
//             console.log(`khong tim thay sach co title "${title}"`);
//         }
//     }
// }


// const book1 = new Book(1, "heeloo", "aloo1");
// const book2 = new Book(2, "hi", "aloo2");
// const book3 = new Book(3, "xin chao", "aloo2");
// const book4 = new Book(4, "ohio", "aloo4");
// const book5 = new Book(5, "hajimemashite", "alo5");


// const myLibrary = new Libraray();

// myLibrary.addBook(book1);
// myLibrary.addBook(book2);
// myLibrary.addBook(book3);
// myLibrary.addBook(book4);
// myLibrary.addBook(book5);

// myLibrary.showBook();

// myLibrary.updateBookById(2,"doraemon", "luffy");

// myLibrary.showBook();

// console.log("tim kiem theo title: 'hi':");
// myLibrary.searchBookByTitle("hi");