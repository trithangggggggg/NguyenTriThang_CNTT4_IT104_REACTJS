function check<T extends boolean>(condition: T): void {
    if (condition) {
        console.log("Xin chào");
    } else {
        console.log("Tạm biệt");
    }
}

let myBool: boolean = true;
check(myBool);

myBool = false;
check(myBool);

