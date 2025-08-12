class Account {
    public id:number;
    public userName:string;
    private password:string;
    public isLogin:string;
    public role:string;
    constructor(id:number,userName:string,password:string,isLogin:string,role:string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login():boolean{
        return true;
    }
    logout():boolean{
        if(this.isLogin == "true"){
            console.log(`Dang xuat thanh cong`);
            return ;
        }else if(this.isLogin == "false"){
            console.log(`tai khoan ${this.userName} da dang xuat`);
            return ;
        }
    }
}


class userAcc extends Account {
    public status:string;
    constructor(id:number,userName:string,password:string,isLogin:string,role:string,status:string) {
        super(id,userName,password,isLogin,role);
        this.status = status;
    }
    login(): boolean {
        if(this.status == "active"){
            console.log(`Chao mung ${this.userName} den voi binh nguyen vo tan`);
             this.isLogin = "true";
        }else if (this.status == "banned"){
            console.log(`tai khoan ${this.userName} da bi khoa den 2090`);
        }else{
            return false;
        }
    }
}



const trithang = new userAcc(1,"trithang","123456","true","admin","active");
console.log(trithang.login());
const trithang1 = new userAcc(1,"trithang1","123456","true","admin","active");
console.log(trithang1.logout());



const tuanminh = new userAcc(2, "tuanminh", "123456", "false", "user", "banned");
console.log(tuanminh.login());



















