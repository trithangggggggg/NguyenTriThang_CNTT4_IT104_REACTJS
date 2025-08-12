class Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
        return true;
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
const trithang = new userAcc(1, "trithang", "123456", "true", "admin", "active");
console.log(trithang.login());
const trithang1 = new userAcc(1, "trithang1", "123456", "true", "admin", "active");
console.log(trithang1.logout());
const tuanminh = new userAcc(2, "tuanminh", "123456", "false", "user", "banned");
console.log(tuanminh.login());
