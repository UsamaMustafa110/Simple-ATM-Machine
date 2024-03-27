#! /usr/bin/env node
let myBalance = 50000;
let myPin = 2424;
import inquirer from "inquirer";
let pinAnswer = await inquirer.prompt([
    {
        name: "userPin",
        type: "number",
        message: "Enter your 4 digit pin",
    },
]);
if (pinAnswer.userPin == myPin) {
    console.log("Pin is correct");
    console.log("Welcome Usama Mustafa");
    let accountType = await inquirer.prompt([
        {
            name: "accountType",
            type: "list",
            choices: ["current", "saving"],
            message: "Enter your account type",
        },
    ]);
    if (accountType.accountType == "current") {
        console.log("your account is current");
    }
    else if (accountType.accountType == "saving") {
        console.log("your account is saving");
    }
    let operation = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            choices: ["withdrawal of amount", "balance inquiry"],
            message: "Enter your operation",
        },
    ]);
    if (operation.operation == "withdrawal of amount") {
        let amount = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: [1000, 2000, 5000, 10000, "or-any-other-amount"],
                message: "Enter your amount",
            },
        ]);
        // if (amount.amount == 1000) {
        //   console.log("transaction successful");
        //   console.log("your remaining balance is", myBalance - amount.amount);
        // } else if (amount.amount == 2000) {
        //   console.log("transaction successful");
        //   console.log("your remaining balance is", myBalance - amount.amount);
        // } else if (amount.amount == 5000) {
        //   console.log("transaction successful");
        //   console.log("your remaining balance is", myBalance - amount.amount);
        // } else if (amount.amount == 10000) {
        //   console.log("transaction successful");
        //   console.log("your remaining balance is", myBalance - amount.amount);
        // }
        if (amount.amount == "or-any-other-amount") {
            let anotherAmount = await inquirer.prompt([
                {
                    name: "anotherAmount",
                    type: "number",
                    message: "Enter your amount",
                },
            ]);
            if (anotherAmount.anotherAmount <= myBalance) {
                console.log("transaction successful");
                console.log("your remaining balance is", myBalance - anotherAmount.anotherAmount);
            }
            else if (anotherAmount.anotherAmount > myBalance) {
                console.log("transaction failed");
                console.log("insufficient balance");
            }
        }
        else {
            console.log("transaction successful");
            console.log("your remaining balance is", myBalance - amount.amount);
        }
    }
    if (operation.operation == "balance inquiry") {
        console.log("your balance is", myBalance);
    }
    console.log("Thank you for using my ATM, have a nice day");
}
else {
    console.log("incorrect pin, try again");
}
