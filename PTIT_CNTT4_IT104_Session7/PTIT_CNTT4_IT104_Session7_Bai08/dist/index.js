class Account {
    constructor(accountNumber, balance, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }
    deposit(amount) {
        if (amount <= 0)
            return 0;
        this.balance += amount;
        this.history.push(`Nạp: ${amount}, Số dư: ${this.balance}`);
        return amount;
    }
    withdraw(amount) {
        if (amount <= 0 || amount > this.balance)
            return 0;
        this.balance -= amount;
        this.history.push(`Rút: ${amount}, Số dư: ${this.balance}`);
        return amount;
    }
    showHistory() {
        if (this.history.length === 0) {
            console.log("Không có giao dịch nào.");
            return;
        }
        this.history.forEach(item => console.log(item));
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, balance, status, interestRate) {
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (amount <= 0)
            return 0;
        if (amount > this.balance)
            amount = this.balance;
        this.balance -= amount;
        this.history.push(`Rút: ${amount}, Số dư: ${this.balance}`);
        return amount;
    }
}
class CheckingAccount extends Account {
    constructor(accountNumber, balance, status, overdraftLimit) {
        super(accountNumber, balance, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= 0)
            return 0;
        const maxWithdraw = this.balance + this.overdraftLimit;
        if (amount > maxWithdraw) {
            return 0;
        }
        this.balance -= amount;
        this.history.push(`Rút: ${amount}, Số dư: ${this.balance}`);
        return amount;
    }
    deposit(amount) {
        if (amount <= 0)
            return 0;
        this.balance += amount;
        this.history.push(`Nạp: ${amount}, Số dư: ${this.balance}`);
        return amount;
    }
}
const transaction = new CheckingAccount(2001, 1000, "active", 500);
transaction.deposit(1000);
transaction.withdraw(800);
transaction.withdraw(800);
transaction.withdraw(2000);
transaction.showHistory();
