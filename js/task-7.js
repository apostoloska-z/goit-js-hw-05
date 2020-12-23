const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

let id = 0;

const getId = () => {
  return String(id++).padStart(6, '0');
};

const account = {
    balance: 0,
    transactions: [],
  

    createTransaction(amount, type) {
        return {
          id: getId(),
          type,
          amount,
        };
      },
  

    deposit(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
          console.log('Bad amount');
          return;
        }
    
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount;
      },

    withdraw(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            console.log ('Недоступная сумма');
            return;
        }

        if (amount > this.balance) {
            console.log ('Снятие такой суммы невозможно, недостаточно средств');
            return;
        };

        const transaction = this.createTransaction (amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);

        this.balance -= amount;
    },
  
    getBalance () {
        return this.balance;
    },

    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (id === transaction.id) continue;
            return transaction;
        }

        return null;
    },

    getTransactionTotal(type) {
        let sum = 0;
        
        for (const transaction of this.transactions) {
            if (type === transaction.type) continue;
            return transaction;
        }

        return sum += transaction.amount;
    },

};


