
//Chapter: #9

// Question:no1

// Prompt user to enter the city name
let city = prompt("Enter your city name:");

// Check if the entered city is Karachi
if (city.toLowerCase() === "karachi") {
  // Display the welcome message
  console.log("Welcome to the city of lights!");
} else {
  // Display a generic message for other cities
  console.log("Welcome to your city!");
}


//Question:2
// Prompt user to enter their gender
let gender = prompt("Enter your gender (male/female):");

// Check the gender and display the appropriate message
if (gender.toLowerCase() === "male") {
  alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
  alert("Good Morning Ma’am.");
} else {
  alert("Invalid input! Please enter 'male' or 'female'.");
}


//Question:3

// Prompt the user to enter the traffic signal color
let signalColor = prompt("Enter the color of the traffic signal (red, yellow, green):");

// Check the color and display the appropriate message
if (signalColor.toLowerCase() === "red") {
  alert("Must Stop!");
} else if (signalColor.toLowerCase() === "yellow") {
  alert("Ready to move!");
} else if (signalColor.toLowerCase() === "green") {
  alert("Move now!");
} else {
  alert("Invalid input! Please enter red, yellow, or green.");
}


//Question:4

// Prompt the user to enter the remaining fuel in the car (in liters)
let remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// Check if the remaining fuel is less than 0.25 litres
if (remainingFuel < 0.25) {
  alert("Please refill the fuel in your car.");
} else {
  alert("You have enough fuel.");
}

//Question:5

 var a  = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}

//Question:6








//Question:7

// Store a secret number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the guessed number is correct or close to the correct answer
if (userGuess === secretNumber) {
  alert("Bingo! Correct answer.");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
  alert("Close enough to the correct answer.");
} else {
  alert("Wrong guess! Try again.");
}


//Question:8

// Prompt the user to enter a number
let Numbber = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (numbber % 3 === 0) {
  alert("The number is divisible by 3.");
} else {
  alert("The number is not divisible by 3.");
}


//Question:9

// Prompt the user to enter a number
let number = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (number % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}


//Question:10

// Prompt the user to enter the temperature
let temperature = parseFloat(prompt("Enter the temperature:"));

// Check the temperature and display the corresponding message
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("It’s really cold outside!");
}

//Question:11

// Prompt the user to enter the first number
let num1 = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
let num2 = parseFloat(prompt("Enter the second number:"));

// Prompt the user to enter the operation
let operation = prompt("Enter the operation (+, -, *, /, %):");

// Declare a variable to store the result
let result;

// Perform the calculation based on the operation
if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
  } else {
    alert("Error! Division by zero is not allowed.");
  }
} else if (operation === "%") {
  result = num1 % num2;
} else {
  alert("Invalid operation! Please enter one of +, -, *, /, %.");
}

// If result was calculated, show it to the user
if (result !== undefined) {
  alert("The result is: " + result);
}


//Chapter:# 12

//Question:1

// Prompt the user to enter a character
let char = prompt("Enter a character:");

// Get the ASCII code of the character
let asciiCode = char.charCodeAt(0);

// Check if the character is a number, uppercase letter, or lowercase letter
if (asciiCode >= 48 && asciiCode <= 57) {
  alert("The input is a number.");
} else if (asciiCode >= 65 && asciiCode <= 90) {
  alert("The input is an uppercase letter.");
} else if (asciiCode >= 97 && asciiCode <= 122) {
  alert("The input is a lowercase letter.");
} else {
  alert("The input is neither a number nor an alphabet letter.");
}


//Question:2

// Prompt the user to enter two integers
let numm1 = parseInt(prompt("Enter the first integer:"));
let numm2 = parseInt(prompt("Enter the second integer:"));

// Check if the two integers are equal
if (num1 === num2) {
  alert("Both numbers are equal.");
} else {
  // Display the larger number
  if (num1 > num2) {
    alert("The larger number is: " + num1);
  } else {
    alert("The larger number is: " + num2);
  }
}


//Question:3
// Prompt the user to enter a number
let nummber = parseFloat(prompt("Enter a number:"));

// Check if the number is positive, negative, or zero
if (number > 0) {
  alert("The number is positive.");
} else if (number < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}

//Question:4
// Prompt the user to enter a character
let character = prompt("Enter a character:");

// Check if the character is a vowel (either uppercase or lowercase)
if (character.length === 1 && "aeiouAEIOU".includes(character)) {
  alert("true");  // It's a vowel
} else {
  alert("false");  // It's not a vowel
}

