let firstName = prompt("Enter first name:");
let lastName = prompt("Enter last name:");

let fullName = firstName + " " + lastName;

console.log("Hello " + fullName);
document.write("Hello " + fullName + "<br><br>");


// 2
let mobile = prompt("Enter your favorite mobile model:");

console.log("My favorite phone is: " + mobile);
console.log("Length of string: " + mobile.length);

document.write("My favorite phone is: " + mobile + "<br>");
document.write("Length of string: " + mobile.length + "<br><br>");


// 3
let country = "Pakistani";

console.log("Index of n: " + country.indexOf("n"));
document.write("String: " + country + "<br>");
document.write("Index of 'n': " + country.indexOf("n") + "<br><br>");


// 4
let text = "Hello World";

console.log("Last index of l: " + text.lastIndexOf("l"));
document.write("String: " + text + "<br>");
document.write("Last index of 'l': " + text.lastIndexOf("l") + "<br><br>");


// 5
let word = "Pakistani";

console.log("Character at index 3: " + word.charAt(3));
document.write("String: " + word + "<br>");
document.write("Character at index 3: " + word.charAt(3) + "<br><br>");


// 6
let first = prompt("Enter first name:");
let last = prompt("Enter last name:");

let full = first.concat(" ", last);

console.log("Hello " + full);
document.write("Hello " + full + "<br><br>");


// 7
let city = "Hyderabad";

let replacedCity = city.replace("Hyder", "Islam");

console.log(replacedCity);
document.write("City: " + city + "<br>");
document.write("After replacement: " + replacedCity + "<br><br>");


// 8
let message = "Ali and Sami are best friends. They play cricket and football together.";

let newMessage = message.replaceAll("and", "&");

console.log(newMessage);
document.write(newMessage + "<br><br>");


// 9
let str = "472";
let num = Number(str);

console.log(str, typeof str);
console.log(num, typeof num);

document.write("Value: " + str + "<br>");
document.write("Type: " + typeof str + "<br>");
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br><br>");


// 10
let userInput = prompt("Enter text:");

let upper = userInput.toUpperCase();

console.log(upper);
document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + upper + "<br><br>");


// 11
let input = prompt("Enter text:");

let titleCase =
  input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

console.log(titleCase);
document.write("User input: " + input + "<br>");
document.write("Title case: " + titleCase + "<br><br>");


// 12
let number = 35.36;

let result = number.toString().replace(".", "");

console.log(result);
document.write("Number: " + number + "<br>");
document.write("Result: " + result + "<br><br>");


// 13
let username = prompt("Enter username:");

let valid = true;

for (let i = 0; i < username.length; i++) {
  let code = username.charCodeAt(i);

  if (code === 33 || code === 44 || code === 46 || code === 64) {
    valid = false;
    break;
  }
}

if (valid) {
  console.log("Valid username");
  document.write("Valid username<br><br>");
} else {
  console.log("Please enter a valid username");
  document.write("Please enter a valid username<br><br>");
}


// 14
let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

let search = prompt("Enter item to search").toLowerCase();

let found = false;

for (let i = 0; i < bakery.length; i++) {
  if (bakery[i].toLowerCase() === search) {
    found = true;

    console.log(search + " is available at index " + i);
    document.write(search + " is available at index " + i + "<br><br>");

    break;
  }
}

if (!found) {
  console.log(search + " is not available");
  document.write(search + " is not available<br><br>");
}


// 15
let password = prompt("Enter password:");

let hasAlphabet = false;
let hasNumber = false;

if (password.length >= 6 && isNaN(password.charAt(0))) {
  for (let i = 0; i < password.length; i++) {
    let ch = password.charCodeAt(i);

    if (
      (ch >= 65 && ch <= 90) ||
      (ch >= 97 && ch <= 122)
    ) {
      hasAlphabet = true;
    }

    if (ch >= 48 && ch <= 57) {
      hasNumber = true;
    }
  }

  if (hasAlphabet && hasNumber) {
    console.log("Valid password");
    document.write("Valid password<br><br>");
  } else {
    console.log("Password must contain alphabets and numbers");
    document.write("Password must contain alphabets and numbers<br><br>");
  }
} else {
  console.log("Enter a valid password");
  document.write("Enter a valid password<br><br>");
}


// 16
let university = "University of Karachi";

let arr = university.split("");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  document.write(arr[i] + "<br>");
}

document.write("<br>");


// 17
let userText = prompt("Enter text:");

let lastChar = userText.charAt(userText.length - 1);

console.log("Last character: " + lastChar);
document.write("User input: " + userText + "<br>");
document.write("Last character: " + lastChar + "<br><br>");


// 18
let sentence = "The quick brown fox jumps over the lazy dog";

let lowerSentence = sentence.toLowerCase();

let words = lowerSentence.split(" ");

let count = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}

console.log("Occurrences of 'the': " + count);
document.write("Text: " + sentence + "<br>");
document.write("Occurrences of 'the': " + count + "<br>");