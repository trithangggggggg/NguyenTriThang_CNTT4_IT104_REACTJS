class Account{
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
        return ;
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


class adminAcc extends Account {
    constructor (id:number,userName:string,password:string,isLogin:string,role:string) {
        super(id,userName,password,isLogin,role);
    }
    banUser(userList: userAcc[], idBan:number ):boolean{
        const user = userList.find(u =>u.id == idBan);
        if(!user){
            console.log(`khong tim thay id ${idBan}`);
        }
        user.status == "banned";
        console.log(`Admin ${this.userName} da khoa tai khoan ${user.userName}`);
        return ;
    }
}



const trithang = new adminAcc(1,"trithang","123456","true","admin");
console.log(trithang.login());

let userList = [];

const phamloc = new userAcc(1, "phamloc", "123456", "false", "user", "active");
const tuanminh = new userAcc(2, "tuanminh", "123456", "false", "user", "active");

userList.push(phamloc);
userList.push(tuanminh);

console.log(trithang.banUser(userList, 2));
console.log(trithang.banUser(userList, 1));


















