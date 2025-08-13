class Book{
    id:number;
    title:string;
    author:string;
    year:number;
    constructor(id:number, title:string, author:string, year:number) {
        this.id = id;
        this.title = title,
        this.author = author,
        this.year = year;
    }
}


class Library<T extends {id:number, title:string}> {
    books: T[] = [];
    constructor(books: T[]) {
        this.books = books;
    }
    addBook(book:T):void{
        // them sach vao thu vien
        this.books.push(book);
    }
    
    getBookById(id: number): T | undefined{
        // tim sach theo id 
        return this.books.find(item => item.id === id);
    }
    removeBook(id: number): void{
        let index = this.books.findIndex(item => item.id === id);
        if (index == -1){
            console.log("khong co sach");
        }else{
            let comfirmDelete = confirm(`Ban co muon xoa sach ${this.books[index].title} khong?`);
            if(comfirmDelete){
                this.books.splice(index, 1);
            }
        }
    }
    updateBook(id: number, updatedBook: T): void {
    const index = this.books.findIndex(item => item.id === id);
    if (index === -1) {
        console.log("Không có sách");
} else {
        const confirmUpdate = confirm(`Bạn có muốn cập nhật sách "${this.books[index].title}" không?`);
        if (confirmUpdate) {
            this.books[index] = updatedBook;
            console.log("Đã cập nhật thông tin mới thành công");
            }
        }
    }
    listBooks(){










    }
}


















