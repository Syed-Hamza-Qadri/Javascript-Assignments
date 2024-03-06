// Chapter 5

// Q1
var num1 = 3
var num2 = 5

document.write("<h2>Question 1</h2>")

// Addition
var num3 = num1 + num2
document.write("Sum of " + num1 + " and " + num2 + " is " + num3 + "<br>")

// Q2
document.write("<h2>Question 2</h2>")

// Subtraction
var num4 = num1 - num2
document.write("Subtraction of " + num1 + " and " + num2 + " is " + num4 + "<br>")

// Multiplication
var num5 = num1 * num2
document.write("Product of " + num1 + " and " + num2 + " is " + num5 + "<br>")

// Division
var num6 = num1 / num2
document.write("Divison of " + num1 + " and " + num2 + " is " + num6 + "<br>")

// Modulus
var num7 = num1 % num2
document.write("Modulus of " + num1 + " and " + num2 + " is " + num7 + "<br>")

// Q3
document.write("<h2>Question 3</h2>")

var var1
document.write("Value after the variable declaration is " + var1 + "<br>")

var vnum1 = 5
document.write("Initial value: " + vnum1 + "<br>")

var vnum2 = ++vnum1
document.write("Value after increment is: " + vnum2 + "<br>")

var vnum3 = vnum1 + 7
document.write("Value after addition is: " + vnum3 + "<br>")

var vnum4 = --vnum3
document.write("Value after decrement is: " + vnum4 + "<br>")

var vnum5 = vnum4 % 3
document.write("The reminder is: " + vnum5 + "<br>")

// Q4
document.write("<h2>Question 4</h2>")

var cnum1 = 600
document.write("Total cost to buy 5 tickets to a movie is " + cnum1 * 5 + "PKR <br>")

// Q5 
document.write("<h2>Question 5</h2>")

var tnum1 = 4
document.write("Table of " + tnum1 + "<br>" + tnum1 + "x1=" + tnum1 * 1 + "<br>" + tnum1 + "x2=" + tnum1 * 2 + "<br>" + tnum1 + "x3=" + tnum1 * 3 + "<br>" + tnum1 + "x4=" + tnum1 * 4 + "<br>" + tnum1 + "x5=" + tnum1 * 5 + "<br>" + tnum1 + "x6=" + tnum1 * 6 + "<br>" + tnum1 + "x7=" + tnum1 * 7 + "<br>" + tnum1 + "x8=" + tnum1 * 8 + "<br>" + tnum1 + "x9=" + tnum1 * 9 + "<br>" + tnum1 + "x10=" + tnum1 * 10 + "<br>")

// Q6
document.write("<h2>Question 6</h2>")

var temp1 = 25
var temp2 = (temp1 * 9 / 5) + 32
document.write(temp1 + "C is " + temp2 + "F" + "<br>")

var temp3 = 70
var temp4 = (temp3 - 32) * 5 / 9
document.write(temp3 + "F is " + temp4 + "C" + "<br>")

// Q7
document.write("<h2>Question 7</h2>")

var inum1 = 650
var inum2 = 100
var qnum1 = 3
var qnum2 = 7
var snum1 = 100

document.write("<h3>Shopping Cart</h3> <br> Price of item 1 is " + inum1 + "<br> Quantity of item 1 is " + qnum1 + "<br> Price of item 2 is " + inum2 + "<br> Quantity of item 2 is " + qnum2 + "<br> Shipping Charges " + snum1 + "<br>")

// Q8
document.write("<h2>Question 8</h2>")

var tmarks1 = 980
var omarks1 = 804
var percent1 = (omarks1/tmarks1) * 100

document.write("<h3>Mark Sheet</h3> <br> Total Marks : " + tmarks1 + "<br> Marks Obtained : " + omarks1 + "<br> Percentage : " + percent1 + "<br>")

// Q9
document.write("<h2>Question 9</h2>")

var US$ = 10
var Riyal = 25

var US$toPkr = 104.80
var RiyaltoPkr = 28

var totalPkr = (US$*US$toPkr)+(Riyal*RiyaltoPkr)

document.write("<h3>Currency in PKR</h3> <br> Total Currency in PKR: "+ totalPkr)

// Q10
document.write("<h2>Question 10</h2>")

var numVar = 5
document.write(((numVar + 5) * 10) / 2)

// Q11
document.write("<h2>Question 11</h2>")

var currentYear = 2024
var birthYear = 2005

var age = currentYear - birthYear

document.write("<h3>Age Calculator</h3> <br> Current Year: " + currentYear + "<br> Birth Year: " + birthYear + "<br> Your Age is: " + age + "<br>")

// Q12
document.write("<h2>Question 12</h2>")

var circleRadius = 20
var circumference = 2*3.142*circleRadius
var circleArea = 3.142*(circleRadius ** 2)

document.write("<h3>The Geometrizer</h3> <br> Radius of a circle: " + circleRadius + "<br> The circumference is: " + circumference + "<br> The area is: " + circleArea + "<br>")

// Q13
document.write("<h2>Question 13</h2>")

var favSnack = "chocolate chip"
var currentAge = 18
var maxAge = 63
var amountPerDay = 3

document.write("<h3>The Lifetime Supply Calculator</h3> <br> You will need " + amountPerDay*(maxAge-currentAge) + " " + favSnack + " to last you until the rip old age of " + maxAge + "<br>")

