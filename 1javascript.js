let money = prompt("Your monthly budget", "");
let time = prompt("Enter date YYYY-MM-DD", " ");
let appData = { 
budget: money,
timeData: time,
expenses: {},
optionalExpenses: {},
income:[],
savings: false
};
12                    
let a1 = prompt("Enter obligatory amount of money to pay per month", " ");
    a2 = prompt("How much does it cost?", " ");
    a3 = prompt("Enter obligatory amount of money to pay per month", " ");
    a4 = prompt("How much does it cost?", " ");


    appData.expenses.a1=a2;
    appData.expenses.a3=a4;
    alert(appData.budget / 30);