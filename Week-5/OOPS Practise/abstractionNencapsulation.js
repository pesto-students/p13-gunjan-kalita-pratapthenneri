// BankAccount class
class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;

  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    // Default implementation, to be overridden in subclasses
  }

  getBalance() {
    return this.#balance;
  }
}

// CheckingAccount subclass
class CheckingAccount extends BankAccount {
  withdraw(amount) {
    this.#balance -= amount; // we cannot access private variables outside the class
  }
}

// SavingsAccount subclass
class SavingsAccount extends BankAccount {
  withdraw(amount) {
    if (this.#balance - amount >= 0) {
      this.#balance -= amount; // we cannot access private variables outside the class
    } else {
      console.log("Withdrawal failed. Insufficient funds.");
    }
  }
}

// Create instances and test
const checking = new CheckingAccount("12345", 1000, "John Doe");
const savings = new SavingsAccount("67890", 500, "Jane Smith");

checking.deposit(200);
savings.deposit(100);

checking.withdraw(300);
savings.withdraw(700);

console.log(checking.getBalance()); // Output: 900
console.log(savings.getBalance()); // Output: 400
