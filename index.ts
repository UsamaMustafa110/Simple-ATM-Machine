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
} else {
  console.log("incorrect pin, try again");
}
if (pinAnswer.userPin == myPin) {
  console.log("Welcome Usama Mustafa");
}
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
else if (accountType.accountType == "saving")
{
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
      type: "number",
      message: "Enter your amount",
    },
  ]);
  if (amount.amount <= myBalance) {
    myBalance = myBalance - amount.amount;
    console.log("transaction successful");
    console.log("your remaining balance is", myBalance);
  } else {
    console.log("insufficient balance");
  }
}

if (operation.operation == "balance inquiry") {
  console.log("your balance is", myBalance);
}

console.log("Thank you for using my ATM, have a nice day");
