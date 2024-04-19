#! /usr/bin/env node
import inquirer from "inquirer";
let accountBalance = 25000;
let accountPin = 3579;
let repeat = true;
let pinAnswers = await inquirer.prompt([{ name: "pinNumber", type: "number", message: "Enter Your Account Pin Code : " }
]);
console.log(`you entered pincode is ${pinAnswers.pinNumber} `);
if (pinAnswers.pinNumber == accountPin) {
    console.log(" ***** Well Come To ATM Machine *******");
    while (repeat == true) {
        let operations = await inquirer.prompt([{ name: "operation", type: "list", choices: ["Fast Cash", "Withdraw", "Deposit", "Balance"], message: "Please Select Any Option : " }
        ]);
        console.log("Your Choice Is : " + operations.operation);
        if (operations.operation == "Fast Cash") {
            let fastCash = await inquirer.prompt([{ name: "value", type: "list", choices: ["1000", "2000", "5000", "10000"], message: "Please Select Any Option : " }
            ]);
            console.log("Your Choice Is : " + operations.operation);
            if (fastCash.value == "1000") {
                if (accountBalance < 1000)
                    console.log("Oops! Sorry You have insufficent balance ...");
                else {
                    accountBalance = accountBalance - 1000;
                    console.log(`Your Account is debited by Amount: ${1000}`);
                }
            }
            else if (fastCash.value == "2000") {
                if (accountBalance < 2000)
                    console.log("Oops! Sorry You have insufficent balance ...");
                else {
                    accountBalance = accountBalance - 2000;
                    console.log(`Your Account is debited by Amount: ${2000}`);
                }
            }
            else if (fastCash.value == "5000") {
                if (accountBalance < 5000)
                    console.log("Oops! Sorry You have insufficent balance ...");
                else {
                    accountBalance = accountBalance - 5000;
                    console.log(`Your Account is debited by Amount: ${5000}`);
                }
            }
            else if (fastCash.value == "10000") {
                if (accountBalance < 10000)
                    console.log("Oops! Sorry You have insufficent balance ...");
                else {
                    accountBalance = accountBalance - 10000;
                    console.log(`Your Account is debited by Amount: ${10000}`);
                }
            }
        }
        if (operations.operation == "Withdraw") {
            let debit = await inquirer.prompt([{ name: "Amount", type: "number", message: "Enter Amount to withdraw : " }
            ]);
            if (debit.Amount > accountBalance)
                console.log("Oops! Sorry You have insufficent balance ...");
            else {
                accountBalance = accountBalance - debit.Amount;
                console.log(`Your Account is debited by Amount: ${debit.Amount}`);
            }
        }
        else if (operations.operation == "Deposit") {
            let credit = await inquirer.prompt([{ name: "Amount", type: "number", message: "Enter Amount to withdraw : " }
            ]);
            accountBalance = accountBalance + credit.Amount;
            console.log(`Your Account is Credited by Amount: ${credit.Amount}`);
        }
        else if (operations.operation == "Balance") {
            console.log(`Your Account Balance is : ${accountBalance}`);
        }
        let ans = await inquirer.prompt([{ name: "isContinue", type: "confirm", message: "Do You Want to Contine ...... (y/n): ",
                default: "true" }
        ]);
        repeat = ans.isContinue;
    }
}
else
    console.log("Oops! I /'m sorry. You Enter the Wrong Pin Code : ");
