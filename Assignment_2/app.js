//  ASSIGNMENT NO 02

// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.


// let check = "Global Scope Variable"
// function userInput(firstName) {
//     firstName = prompt("Enter Your Name")
//     return function (lastName) {
//         lastName = prompt("Enter Your Last Name")
//         console.log(firstName + " " + lastName)
//     }
// }

// console.log(check)
// let innerFunction = userInput();
// let innerFunction2 = userInput();

// innerFunction()
// innerFunction2()



// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

// let arr = [1, 2, 9, 10, 11, 14, 13, 20, 3, 4, 5];

// function check(arr, val) {
//     if (arr.length === 0) {
//       return false; 
//     }
//     if (arr[0] === val) {
//       return true; 
//     }
//     return check(arr.slice(1), val); 
//   }
  
// console.log(check(arr, 200))


// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

// function addParagraph(text) {
//     const newParagraph = document.createElement("h1");
//     const newText = document.createTextNode(text);
//     newParagraph.appendChild(newText);
//     document.body.appendChild(newParagraph);
//   }

//   addParagraph("This is some new text!");


// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.


// function addListItem(text) {
//     var ol = document.querySelector('ol');
//     var li = document.createElement('li');
//     li.textContent = text;
//     ol.appendChild(li);
//   }

//   addListItem('New list item');
//   addListItem('New list item2');
//   addListItem('New list item3');


// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

// let htmlTag = document.getElementById('h1-Id');

// function changeBackgroundColor(htmlTag, color) {
//     htmlTag.style.backgroundColor = color;
//   }

// changeBackgroundColor(htmlTag, 'green');


// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.


// let prevStudents = localStorage.getItem("students"); 
// let students = prevStudents ? JSON.parse(prevStudents) : [];

// function provideStudent(nameValue, courseName) {
//   let std = {
//     name: nameValue,
//     className: courseName,
//   };
//   students.push(std);
//   console.log(students);

//   let stringify = JSON.stringify(students); 
//   localStorage.setItem("students", stringify); 
// }

// provideStudent("Minhaj","Javascript");
// provideStudent("Ishaaq","Python");