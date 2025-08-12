class Account {
    public accountNumber: number;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: number, balance: number, status: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }

    deposit(amount: number): number {
        if (amount <= 0) return 0;
        this.balance += amount;
        this.history.push(`Nạp: ${amount}, Số dư: ${this.balance}`);
        return amount;
    }

    withdraw(amount: number): number {
        if (amount <= 0 || amount > this.balance) return 0;
        this.balance -= amount;
        this.history.push(`Rút: ${amount}, Số dư: ${this.balance}`);
        return amount;
    }

    showHistory(): void {
        if (this.history.length === 0) {
            console.log("Không có giao dịch nào.");
            return;
        }
        this.history.forEach(item => console.log(item));
    }
}

class SavingAccount extends Account {
    public interestRate: number;

    constructor(accountNumber: number, balance: number, status: string, interestRate: number) {
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }

    withdraw(amount: number): number {
        if (amount <= 0) return 0;
        if (amount > this.balance) amount = this.balance;
        this.balance -= amount;
        this.history.push(`Rút: ${amount}, Số dư: ${this.balance}`);
        return amount;
    }
}

const acc = new SavingAccount(1001, 1000, "active", 5);
acc.deposit(500);
acc.withdraw(200);
acc.withdraw(2000);
acc.showHistory();





