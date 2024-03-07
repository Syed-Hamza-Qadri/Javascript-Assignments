// Chapter 12 & 13

// // Q1
// document.write("<h2>Question 1</h2>")

// Q2
document.write("<h2>Question 2</h2>")

var int1 = +prompt("Enter the first integer:")
var int2 = +prompt("Enter the second integer:")

if (isNaN(int1) || isNaN(int2)) {
    console.log("Invalid input. Please enter valid integers.")
    document.write("Invalid input. Please enter valid integers.")
} else if (int1 > int2) {
    console.log(`${int1} is larger than ${int2}.`)
    document.write(`${int1} is larger than ${int2}.`)
} else if (int2 > int1) {
    console.log(`${int2} is larger than ${int1}.`)
    document.write(`${int2} is larger than ${int1}.`)
} else {
    console.log(`${int1} and ${int2} are equal.`)
    document.write(`${int1} and ${int2} are equal.`)
}


// Q3
document.write("<h2>Question 3</h2>")

var userInput2 = +prompt("Enter a number:")

if (isNaN(userInput2)) {
    document.write(`${userInput2} is a invalid number.`)
    console.log(`${userInput2} is a invalid number.`)
} else if (userInput2 > 0) {
    document.write(`${userInput2} is a positive number.`)
    console.log(`${userInput2} is a positive number.`)
} else if (userInput2 < 0) {
    document.write(`${userInput2} is a negative number.`)
    console.log(`${userInput2} is a negative number.`)
} else {
    document.write(`${userInput2} is zero.`)
    console.log(`${userInput2} is zero.`)
}

// // Q4
// document.write("<h2>Question 4</h2>")

// Q5 
document.write("<h2>Question 5</h2>")

var pass1 = "Password"
var uinput = prompt("Enter your password:")

if (!uinput) {
    document.write("Please enter your password.")
    console.log("Please enter your password.")
} else if (uinput === pass1) {
    document.write("Correct! The password you entered matches the original password.")
    console.log("Correct! The password you entered matches the original password.")
} else {
    document.write("Incorrect password.")
    console.log("Incorrect password.")
}

// Q6
document.write("<h2>Question 6</h2>")

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting)
document.write(greeting)

// // Q7
// document.write("<h2>Question 7</h2>")

