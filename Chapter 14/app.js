var studentNames = [];

var studentNamesObj = new Array();

var fruits = ["Apple", "Banana", "Mango"];

var numbers = [10, 20, 30, 40];

var boolArray = [true, false, true];

var mixedArray = ["Ali", 25, true, null];

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h3>Qualifications:</h3>");
for (var i = 0; i < qualifications.length; i++) {
  document.write((i + 1) + ") " + qualifications[i] + "<br>");
}

var students = ["Ali", "Sara", "Ahmed"];
var scores = [400, 350, 450];
var totalMarks = 500;

for (var i = 0; i < students.length; i++) {
  var percentage = (scores[i] / totalMarks) * 100;
  document.write("Score of " + students[i] + " is " + scores[i] +
    ". Percentage: " + percentage + "%<br>");
}

var colors = ["Red", "Green", "Blue"];
document.write("<br>Initial Colors: " + colors + "<br>");

var addStart = prompt("Enter color to add at beginning:");
colors.unshift(addStart);
document.write("After adding at start: " + colors + "<br>");

var addEnd = prompt("Enter color to add at end:");
colors.push(addEnd);
document.write("After adding at end: " + colors + "<br>");

colors.unshift("Purple", "Orange");
document.write("After adding two at start: " + colors + "<br>");

colors.shift();
document.write("After deleting first: " + colors + "<br>");

colors.pop();
document.write("After deleting last: " + colors + "<br>");

var indexAdd = prompt("Enter index to add color:");
var colorName = prompt("Enter color name:");
colors.splice(indexAdd, 0, colorName);
document.write("After adding at index: " + colors + "<br>");

var indexDel = prompt("Enter index to delete color:");
var countDel = prompt("How many colors to delete:");
colors.splice(indexDel, countDel);
document.write("After deletion: " + colors + "<br>");

var scoresArr = [320, 230, 480, 120];
scoresArr.sort(function(a, b) { return a - b; });
document.write("<br>Sorted Scores: " + scoresArr + "<br>");

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(0, 3);
document.write("Selected Cities: " + selectedCities + "<br>");

var arr = ["This ", " is ", " my ", " cat"];
var result = arr.join("");
document.write("Joined String: " + result + "<br>");

var fifo = [];
fifo.push("A");
fifo.push("B");
fifo.push("C");

document.write("<br>FIFO:<br>");
document.write(fifo.shift() + "<br>");
document.write(fifo.shift() + "<br>");
document.write(fifo.shift() + "<br>");

var lifo = [];
lifo.push("A");
lifo.push("B");
lifo.push("C");

document.write("<br>LIFO:<br>");
document.write(lifo.pop() + "<br>");
document.write(lifo.pop() + "<br>");
document.write(lifo.pop() + "<br>");

var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (var i = 0; i < phones.length; i++) {
  document.write("<option>" + phones[i] + "</option>");
}
document.write("</select>");