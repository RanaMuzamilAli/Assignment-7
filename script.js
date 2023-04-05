// PROGRAM 1
// let num = parseFloat(prompt("Enter a number:"));

// if (num > 0) {
//   console.log(num + " is positive.");
// } else if (num < 0) {
//   console.log(num + " is negative.");
// } else {
//   console.log("The number is zero.");
// }

// PROGRAM 2

// let num1 = parseInt(prompt("Enter the first number: "));
// let num2 = parseInt(prompt("Enter the second number: "));

// if (num1 > num2) {
//   console.log(`The maximum number is ${num1}`);
// } else {
//   console.log(`The maximum number is ${num2}`);
// }

// Program 3:
// let num1 = parseInt(prompt("Enter the first number: "));
// let num2 = parseInt(prompt("Enter the second number: "));
//  let num3 = parseInt(prompt("Enter the third number: "));

// function findMax(a, b, c) {
//   let max = a;

//   if (b > max) {
//     max = b;
//   }
//   if (c > max) {
//     max = c;
//   }
//   return max;
// }
// const maxNum = findMax(num1, num2, num3);
// console.log(`The maximum number is: ${maxNum}`);

// program 4:
// const num = parseInt(prompt("Enter a number: "));

// if (num % 5 === 0 && num % 11 === 0) {
//   console.log(`${num} is divisible by both 5 and 11.`);
// } else {
//   console.log(`${num} is not divisible by both 5 and 11.`);
// }

// program 5:
// const num = parseInt(prompt("Enter a number: "));

// if (num % 2 === 0) {
//   console.log(`${num} is an even number.`);
// } else {
//   console.log(`${num} is an odd number.`);
// }

// program 6:
// const year = parseInt(prompt("Enter a year: "));

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(`${year} is a leap year.`);
// } else {
//   console.log(`${year} is not a leap year.`);
// }

// program 7:
// const char = prompt("Enter a character: ");

// if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//   console.log(`${char} is an alphabet.`);
// } else {
//   console.log(`${char} is not an alphabet.`);
// }

// program 8:
// const char = prompt("Enter a character: ");

// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || 
//     char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
//   console.log(`${char} is a vowel.`);
// } else {
//   console.log(`${char} is a constant.`);
// }

// Program 9: 
// const weekNumber = parseInt(prompt("Enter a week number (1-7): "));

// switch (weekNumber) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid week number.");
// }

// Program 10 : 

// const monthNumber = parseInt(prompt("Enter a month number (1-12): "));

// let daysInMonth;

// switch (monthNumber) {
//   case 1:
//     daysInMonth = 31;
//     break;
//   case 2:
//     const year = new Date().getFullYear();
//     daysInMonth = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
//     break;
//   case 3:
//     daysInMonth = 31;
//     break;
//   case 4:
//     daysInMonth = 30;
//     break;
//   case 5:
//     daysInMonth = 31;
//     break;
//   case 6:
//     daysInMonth = 30;
//     break;
//   case 7:
//     daysInMonth = 31;
//     break;
//   case 8:
//     daysInMonth = 31;
//     break;
//   case 9:
//     daysInMonth = 30;
//     break;
//   case 10:
//     daysInMonth = 31;
//     break;
//   case 11:
//     daysInMonth = 30;
//     break;
//   case 12:
//     daysInMonth = 31;
//     break;
//   default:
//     console.log("Invalid month number.");
// }

// if (daysInMonth) {
//   console.log(`Number of days in month ${monthNumber}: ${daysInMonth}`);
// }