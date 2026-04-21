let arr1 = [[], [], []];

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function show(output) {
  console.log(output);
  document.write(output + "<br>");
}

for (let i = 1; i <= 10; i++) {
  show(i);
}

let num = +prompt("Enter table number:");
let length = +prompt("Enter table length:");
for (let i = 1; i <= length; i++) {
  show(num + " x " + i + " = " + (num * i));
}

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
  show(fruits[i]);
}

let counting = [];
for (let i = 1; i <= 15; i++) {
  counting.push(i);
}
show("Counting: " + counting.join(", "));

let reverse = [];
for (let i = 10; i >= 1; i--) {
  reverse.push(i);
}
show("Reverse: " + reverse.join(", "));

let even = [];
for (let i = 0; i <= 20; i += 2) {
  even.push(i);
}
show("Even: " + even.join(", "));

let odd = [];
for (let i = 1; i < 20; i += 2) {
  odd.push(i);
}
show("Odd: " + odd.join(", "));

let series = [];
for (let i = 2; i <= 20; i += 2) {
  series.push(i + "k");
}
show("Series: " + series.join(", "));

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let search = prompt("Enter item to search:");
let found = false;

for (let i = 0; i < A.length; i++) {
  if (A[i] === search.toLowerCase()) {
    found = true;
    break;
  }
}

if (found) {
  show(search + " is found in the list.");
} else {
  show(search + " is not found in the list.");
}

let arr = [24, 53, 78, 91, 12];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
show("Largest number: " + largest);

let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
show("Smallest number: " + smallest);

for (let i = 5; i <= 100; i += 5) {
  show(i);
}