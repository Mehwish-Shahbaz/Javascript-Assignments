var ch = prompt("Enter a character:");
var code = ch.charCodeAt(0);

if (code >= 48 && code <= 57) {
    alert("It is a number");
} else if (code >= 65 && code <= 90) {
    alert("It is an uppercase letter");
} else if (code >= 97 && code <= 122) {
    alert("It is a lowercase letter");
} else {
    alert("It is a special character");
}

var num1 = +prompt("Enter first integer:");
var num2 = +prompt("Enter second integer:");

if (num1 > num2) {
    alert(num1 + " is larger");
} else if (num2 > num1) {
    alert(num2 + " is larger");
} else {
    alert("Both numbers are equal");
}

var num = +prompt("Enter a number:");

if (num > 0) {
    alert("Positive number");
} else if (num < 0) {
    alert("Negative number");
} else {
    alert("Zero");
}

var char = prompt("Enter a single character:").toLowerCase();

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    alert(true);
} else {
    alert(false);
}

var correctPassword = "abc123";
var userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);

var time = +prompt("Enter time in 24-hour format (e.g. 1900):");

if (time >= 0 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
} else {
    alert("Invalid time");
}