class BankAccount
{
    #id;
    #balance;
    #owner;

    constructor(idVal,balanceVal,ownerVal) {
        this.id = idVal;
        this.balance = balanceVal;
        this.owner = ownerVal;
    }

    set id(num) {
        if(num>0) {
            this.#id = num;
        }
    }

    get id() {
        return this.#id;
    }

    set balance(num) {
        if(num>0) {
            this.#balance = num;
        }
    }

    get balance() {
        return this.#balance;
    }

    set owner(text) {
        if(text!="" && text!=null) {
            this.#owner = text;
        }
    }

    get owner() {
        return this.#owner;
    }

    withdraw(sum) {
        this.#balance-=sum;
    }

    deposit(sum) {
        this.#balance+=sum;
    }
}

class SavingBankAccount extends BankAccount
{
    #interest;

    constructor(idVal,balanceVal,ownerVal,interestVal) {
        super(idVal,balanceVal,ownerVal);
        //this.#interest = interest;
        this.interest = interestVal;
    }

    set interest(num) {
        if(num>0) {
            this.#interest = num;
        }
    }

    get interest() {
        return this.#interest;
    }

}


let accounts = [
    new SavingBankAccount(23234,200,"mosh",7),
    new SavingBankAccount(23235,500,"ron",7),
    new SavingBankAccount(23236,100,"dave",6),
    new BankAccount(678678,100,"dave",6),
    new BankAccount(567567,400,"tali",5),
    new BankAccount(978989,100,"renana",7),
    new BankAccount(654654,500,"gila",3)
];


accounts.sort((ob1,ob2)=>ob1.balance-ob2.balance);

accounts.forEach(account=>{console.log(account.balance)});