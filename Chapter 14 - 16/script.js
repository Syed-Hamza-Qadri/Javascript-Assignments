// Chapter 14 - 16

// Q1
// document.write("<h2>Question 1</h2>");

// Q2
// document.write("<h2>Question 2</h2>");

// Q3
document.write("<h2>Question 3</h2>");   

var arrayStr1 = ["Apple","Banana","Mango","Strawberry","Grapes"];
console.log("String Array =>", arrayStr1);
document.write(`String Array => ${arrayStr1}`);

// Q4
document.write("<h2>Question 4</h2>");   

var arrayNum1 = [1,2,3,4,5];
console.log("Number Array =>", arrayNum1);
document.write(`Number Array => ${arrayNum1}`);

// Q5
document.write("<h2>Question 5</h2>");   

var arrayBool1 = [true,false,true,false];
console.log("Boolean Array =>", arrayBool1);
document.write(`Boolean Array => ${arrayBool1}`);

// Q6
document.write("<h2>Question 6</h2>");   

var arrayMix1 = ["Apple",1,true,"Banana",2,false];
console.log("Mix Array =>", arrayMix1);
document.write(`Mix Array => ${arrayMix1}`);

// Q7
document.write("<h2>Question 7</h2>");   

var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write(`<h3>Qualifications:</h3> <br> 1) ${qualification[0]} <br> 2) ${qualification[1]} <br> 3) ${qualification[2]} <br> 4) ${qualification[3]} <br> 5) ${qualification[4]} <br> 6) ${qualification[5]} <br> 7) ${qualification[6]} <br> 8) ${qualification[7]} <br>`);

// Q8
document.write("<h2>Question 8</h2>");  

var studentName1 = ["Michael", "John", "Tony"]
var studentScore1 = [320, 230, 480]
document.write(`Score ${studentName1[0]} of is ${studentScore1[0]}. Percentage: ${studentScore1[0]/500*100}% <br> Score ${studentName1[1]} of is ${studentScore1[1]}. Percentage: ${studentScore1[1]/500*100}% <br> Score ${studentName1[2]} of is ${studentScore1[2]}. Percentage: ${studentScore1[2]/500*100}% `);


// // Q9
// document.write("<h2>Question 9</h2>");

// Q10
document.write("<h2>Question 10</h2>");

var studentScore2 = [320, 230, 480, 120]
document.write(`Score of Students : ${studentScore2} <br> Ordered Score of Students : ${studentScore2.sort()}`);

// Q11
document.write("<h2>Question 11</h2>");

var CitiesList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
var SelectedCities = CitiesList.slice(2,4)
document.write(`Cities list: <br> ${CitiesList} <br> Selected cities list: <br> ${SelectedCities}`);

// Q12
document.write("<h2>Question 12</h2>");

var arr = ["This", "is", "my", "cat"];
var arrjoin = arr.join(" ")
document.write(`Array: <br> ${arr} <br> String: <br> ${arrjoin}`);

// Q13
document.write("<h2>Question 13</h2>");

var devices1 = []
var device11 = devices1.push("keyboard")
var device12 = devices1.push("mouse")
var device13 = devices1.push("printer")
var device14 = devices1.push("monitor")

document.write(`Devices: <br> ${devices1} <br> Out: <br> ${devices1.shift()} <br> Out: <br> ${devices1.shift()} <br> Out: <br> ${devices1.shift()} <br> Out: <br> ${devices1.shift()}`)

// Q14
document.write("<h2>Question 14</h2>");

var devices2 = []
var device21 = devices2.push("keyboard")
var device22 = devices2.push("mouse")
var device23 = devices2.push("printer")
var device24 = devices2.push("monitor")

document.write(`Devices: <br> ${devices2} <br> Out: <br> ${devices2.pop()} <br> Out: <br> ${devices2.pop()} <br> Out: <br> ${devices2.pop()} <br> Out: <br> ${devices2.pop()}`)

// // Q15
// document.write("<h2>Question 15</h2>");

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
