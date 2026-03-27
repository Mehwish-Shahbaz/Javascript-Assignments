let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");

let sum = num1 + num2;

document.write("Sum: " + sum + "<br>");

let value;
document.write("Value after variable declaration is: " + value + "<br>");

value = 5;
document.write("Initial value: " + value + "<br>");

value++;
document.write("Value after increment is: " + value + "<br>");

value = value + 7;
document.write("Value after addition is: " + value + "<br>");

value--;
document.write("Value after decrement is: " + value + "<br>");

let remainder = value % 3;
document.write("The remainder is: " + remainder + "<br><br>");

let ticketPrice = 600;
let totalCost = ticketPrice * 5;

document.write("Total cost to buy 5 tickets to a movie is: " + totalCost + " PKR");