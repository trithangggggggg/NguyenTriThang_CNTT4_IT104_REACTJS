class Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
        return;
    }
    logout() {
        if (this.isLogin == "true") {
            console.log(`Dang xuat thanh cong`);
            return;
        }
        else if (this.isLogin == "false") {
            console.log(`tai khoan ${this.userName} da dang xuat`);
            return;
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status == "active") {
            console.log(`Chao mung ${this.userName} den voi binh nguyen vo tan`);
            this.isLogin = "true";
        }
        else if (this.status == "banned") {
            console.log(`tai khoan ${this.userName} da bi khoa den 2090`);
        }
        else {
            return false;
        }
    }
}
class adminAcc extends Account {
    constructor(id, userName, password, isLogin, role) {
        super(id, userName, password, isLogin, role);
    }
    banUser(userList, idBan) {
        const user = userList.find(u => u.id == idBan);
        if (!user) {
            console.log(`khong tim thay id ${idBan}`);
        }
        user.status == "banned";
        console.log(`Admin ${this.userName} da khoa tai khoan ${user.userName}`);
        return;
    }
}
const trithang = new adminAcc(1, "trithang", "123456", "true", "admin");
console.log(trithang.login());
let userList = [];
const phamloc = new userAcc(1, "phamloc", "123456", "false", "user", "active");
const tuanminh = new userAcc(2, "tuanminh", "123456", "false", "user", "active");
userList.push(phamloc);
userList.push(tuanminh);
console.log(trithang.banUser(userList, 2));
console.log(trithang.banUser(userList, 1));
