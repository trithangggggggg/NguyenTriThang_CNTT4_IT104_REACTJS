/*
Abstract Method
Định nghĩa: Phương thức trừu tượng là một phương thức được khai báo trong một lớp trừu tượng mà 
không có phần thân (implementation). Các lớp con phải thực hiện phương thức này.
Khi nào sử dụng: Sử dụng khi muốn định nghĩa một giao diện chung cho các lớp 
con mà không cung cấp cách thực hiện cụ thể trong lớp cha.

*/
abstract class Animal {
    abstract makeSound(); // Khai báo abstract method (ko có nội dung)
}

class Dog extends Animal {
    makeSound() { // Bắt buộc phải triển khai
        console.log("Gâu gâu"); 
    }
}

const dog = new Dog();
dog.makeSound(); // "Gâu gâu"


/*
Method
Định nghĩa: Phương thức thông thường là một phương thức được khai báo trong một lớp có thể có hoặc không có phần thân. 
Nó có thể được thực hiện trong lớp cha hoặc có thể được ghi đè (override) trong các lớp con.
Khi nào sử dụng: Sử dụng khi muốn cung cấp một hành vi mặc định cho các lớp con, nhưng không bắt buộc chúng phải ghi đè.

*/

class Vehicle {
    start() { // Method thường có sẵn nội dung
        console.log("Xe đang nổ máy");
    }
}

class Car extends Vehicle {
    // Có thể giữ nguyên hoặc ghi đè
    start() {
        console.log("Ô tô đang nổ máy");
    }
}

class Bike extends Vehicle {
    // Không ghi đè -> dùng method của lớp cha
}

const car = new Car();
car.start(); // "Ô tô đang nổ máy"

const bike = new Bike(); 
bike.start(); // "Xe đang nổ máy"
















