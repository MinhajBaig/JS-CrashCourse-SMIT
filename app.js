// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

// let userInput1 = parseInt(prompt("Enter Your First Value",0))
// let userInput2 = parseInt(prompt("Enter Your Second Value",0))

// if (userInput1 > userInput2) {
//     console.log(userInput1 + " is greater than " + userInput2)
// } 
// else if(userInput1 === 0 && userInput2 === 0){
//     alert("Please Enter A Value")
// }
//  else {
//     console.log(userInput2 + " is greater than " + userInput1)
// }


// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.

// let signNumber = parseInt(prompt("Enter a Number"))

// if (signNumber >= 1) {
//     console.log("The  Sign is Plus +")
// } else if (signNumber < 0) {
//     console.log("The  Sign is Minus -")
// } else if (signNumber === 0) {
//     console.log("The Value is Null.")
// }


// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

// let input1 = parseInt(prompt("Enter Your First Value"))
// let input2 = parseInt(prompt("Enter Your Second Value"))
// let input3 = parseInt(prompt("Enter Your Third Value"))
// let input4 = parseInt(prompt("Enter Your Fourth Value"))
// let input5 = parseInt(prompt("Enter Your Fifth Value"))

// if (input1 > input2 && input1 > input3 && input1 > input4 && input1 > input5){
//     console.log("First Value " + input1 + " is greater than from all five values")
// } else if (input2 > input1 && input2 > input3 && input2 > input4 && input2 > input5){
//     console.log("Second Value " + input2 + " is greater than from all five values")
// } else if (input3 > input1 && input3 > input2 && input3 > input4 && input3 > input5){
//     console.log("Third Value " + input3 + " is greater than from all five values")
// } else if (input4 > input1 && input4 > input2 && input4 > input3 && input4 > input5){
//     console.log("Fourth Value " + input4 + " is greater than from all five values")
// } else if (input5 > input1 && input5 > input2 && input5 > input3 && input5 > input4){
//     console.log("Fifth Value " + input5 + " is greater than from all five values")
// } else {
//     console.log("Please Enter a valid number")
// }


// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.

// for (var i=0; i <= 15; i++) {

//     if (i === 0) {
//             console.log(i +  " is even");
//     }
//     else if (i % 2 === 0) {
//             console.log(i + " is even");   
//     }
//     else {
//             console.log(i + " is odd");
//     }
// }


// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.

// let userMarks = parseInt(prompt("Enter Your Marks Here"))

// if (userMarks < 60) {
//     console.log("Your Grade is F")
// }
// else if (userMarks >= 60 && userMarks < 70) {
//     console.log("Your Grade is D")
// }
// else if (userMarks >= 70 && userMarks < 80) {
//     console.log("Your Grade is C")
// }
// else if (userMarks >= 80 && userMarks < 90) {
//     console.log("Your Grade is B")
// }
// else if (userMarks >= 90 && userMarks <= 100) {
//     console.log("Your Grade is A")
// }


// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

// for (var i = 0; i <= 100; i++) {

//     // console.log(i)

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + " Fizz Buzz");
//     }
//     else if (i % 3 === 0) {
//         console.log(i + " Fizz");
//     }
//     else if (i % 5 === 0) {
//         console.log(i + " Buzz");
//     }
//     else{
//         console.log(i)
//     }
// }


// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.

// for (let i = 0; i < 15; i++) {
//     // console.log("*")
//     let symbol = "*"
//     console.log(symbol)
//     for(var j = 1; j <= 4; j++)
//     {
//         let newSymbol = "*"
//     console.log(newSymbol)

//     }
// }