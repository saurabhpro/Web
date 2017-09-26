/*
task is to refactor is as much as possible to align with TS rules

let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
*/

//declare a type for BankAccount
type MyBankAccount = {
    money: number,
    deposit: (value: number) => void
}

let bankAccount: MyBankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

//Declare another type for Personal Details
type PersonalDetails = {
    name: string,
    bankAccount: MyBankAccount,
    hobbies: Array<string>
}

let myself: PersonalDetails = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

