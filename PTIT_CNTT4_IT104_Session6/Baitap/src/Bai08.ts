class Book {
    private id: number
    private title: string
    private author: string
    private stock: number
    private status: string

    constructor(id: number, title: string, author: string, stock: number, status: string) {
        this.id = id
        this.title = title
        this.author = author
        this.stock = stock
        this.status = status
    }

    getId(): number {
        return this.id
    }

    getTitle(): string {
        return this.title
    }

    getAuthor(): string {
        return this.author
    }

    getStock(): number {
        return this.stock
    }

    getStatus(): string {
        return this.status
    }

    setStock(stock: number): void {
        this.stock = stock
    }

    setStatus(status: string): void {
        this.status = status
    }
}

class Member {
    private id: number
    private name: string
    private contact: string
    private lendedBooks: number[] = []
    private status: string

    constructor(id: number, name: string, contact: string, status: string) {
        this.id = id
        this.name = name
        this.contact = contact
        this.status = status
    }

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getContact(): string {
        return this.contact
    }

    getLendedBooks(): number[] {
        return this.lendedBooks
    }

    getStatus(): string {
        return this.status
    }

    lendBook(bookId: number): void {
        this.lendedBooks.push(bookId)
    }

    returnBook(bookId: number): void {
        const index = this.lendedBooks.indexOf(bookId)
        if (index !== -1) {
            this.lendedBooks.splice(index, 1)
        }
    }
}

class LendedBook {
    private memberId: number
    private bookId: number
    private dueDate: Date

    constructor(memberId: number, bookId: number, dueDate: Date) {
        this.memberId = memberId
        this.bookId = bookId
        this.dueDate = dueDate
    }

    getMemberId(): number {
        return this.memberId
    }

    getBookId(): number {
        return this.bookId
    }

    getDueDate(): Date {
        return this.dueDate
    }
}

class Library {
    private books: Book[] = []
    private members: Member[] = []
    private lendedBooks: LendedBook[] = []

    addBook(book: Book): void {
        this.books.push(book)
        console.log(`Them sach ${book.getTitle()} vao thu vien`)
    }

    showBooks(): void {
        if (this.books.length === 0) {
            console.log("Thu vien hien khong co sach nao")
            return
        }
        console.log("Danh sach sach trong thu vien:")
        this.books.forEach(book => {
            console.log(`ID: ${book.getId()}, Tieu de: ${book.getTitle()}, Tac gia: ${book.getAuthor()}, So luong: ${book.getStock()}, Tinh trang: ${book.getStatus()}`)
        })
    }

    addMember(member: Member): void {
        this.members.push(member)
        console.log(`Them thanh vien ${member.getName()} vao thu vien`)
    }

    showMembers(): void {
        if (this.members.length === 0) {
            console.log("Thu vien chua co thanh vien nao")
            return
        }
        console.log("Danh sach thanh vien:")
        this.members.forEach(member => {
            console.log(`ID: ${member.getId()}, Ten: ${member.getName()}, Lien he: ${member.getContact()}, Tinh trang: ${member.getStatus()}`)
        })
    }

    lendBook(memberId: number, bookId: number, dueDate: Date): void {
        const member = this.members.find(m => m.getId() === memberId)
        const book = this.books.find(b => b.getId() === bookId)

        if (!member || !book) {
            console.log("Khong tim thay thanh vien hoac sach")
            return
        }

        if (book.getStock() <= 0) {
            console.log("Sach da het hang")
            return
        }

        member.lendBook(bookId)
        this.lendedBooks.push(new LendedBook(memberId, bookId, dueDate))
        book.setStock(book.getStock() - 1)
        book.setStatus("Da muon")

        console.log(`Thanh vien ${member.getName()} da muon sach ${book.getTitle()}, ngay tra: ${dueDate.toLocaleDateString()}`)
    }
}

const library = new Library()

const book1 = new Book(1, "Harry Potter", "Hello World ", 5, "Co san")
const book2 = new Book(2, "The Car ", "Ronaldo", 3, "Co san")
const book3 = new Book(3, "One Piece", "Luffy ", 0, "Da muon")

library.addBook(book1)
library.addBook(book2)
library.addBook(book3)

const member1 = new Member(1, "Nguyen Van A", "a@email.com", "Dang hoat dong")
const member2 = new Member(2, "Tran Thi B", "b@email.com", "Dang hoat dong")

library.addMember(member1)
library.addMember(member2)

console.log("\nThong tin thu vien:")
library.showBooks()
library.showMembers()

console.log("\nMuon sach:")
library.lendBook(1, 1, new Date(2023, 11, 31))
library.lendBook(2, 2, new Date(2023, 12, 15))

console.log("\nCap nhat thong tin thu vien:")
library.showBooks()



