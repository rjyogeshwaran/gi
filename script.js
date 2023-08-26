// var arr = "fire, air, water";

// let word1 = arr.split('');

// console.log(word1[0]);

// let string = '';

// for (let i = 0; i < 10; i++); {
//     string = string + i;
//     console.log(string);
// }

// let a = 2;

// var t = (Math.sqrt(3) * a * a) / 4;
// console.log(t.toFixed(2));

// for (let i = 2;  i <= 10; i+=2) {
//     console.log(i);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for (let i = 0; i < people.length; i++){
//     console.log(people[i].toUpperCase());
// }

// for (let i = 0; i <= 10; i++){
//     console.log(`i is ${i}`);
//     for (let j = 0; j <= 3; j++) {
//     console.log(`    j is ${j}`)
//     }

// }

// const seatingChart = [['Krishna', 'Venkat', 'Dhaya'], ['Suresh', 'Ramesh', 'Kamesh', 'Karthick'], ['Deepan', 'Akash', 'Mani', 'Kumar']
// ]

// for (let i = 0; i < seatingChart.length; i++){
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++){
//         console.log(row[j])
//     }
// }

// const secret = "BabyHippo";
// let guess = prompt("Enter the Secret Code");
// while (guess !== secret) {
//     guess = prompt("Enter the Secret Code");
// }
// console.log("Congrats You Got the Secret!!!...")

// let input = prompt("Hey,Say Something!");

// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("Ok You Win!");

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = prompt("Enter your first guess! (Type 'q' to quit)");
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     guess = parseInt(guess);
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:");
//         attempts++;
//     } else if (guess < targetNum) {
//         guess = prompt("Too low! Enter a new guess:");
//         attempts++;
//     } else {
//         guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
//     }
// }

// if (guess === 'q') {
//     console.log("OK, YOU QUIT!")
// } else {
//     console.log("CONGRATS YOU WIN!")
//     console.log(`You got it! It took you ${attempts} guesses`)
// }

// const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let num of numbers){
//     console.log(num*num)
// }

// let input = prompt("What would you like to do?");
// while (input !== 'quit') {
//     input = prompt("What would you like to do?");
// }
// console.log("OK QUIT THE APP");

// let input = prompt("What would want to do?");
// const todos = ['collect chicken eggs, clean litter box'];
// while (input !== 'quit' && input !== 'q') {
//     if (input === 'list') {
//         console.log('*******************')
//         for (let i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log('*******************') 
//     }
//     else if (input === 'new') {
//         const newTodo = prompt('Ok, What is the new todo?');
//         todos.push(newTodo);
//         console.log (`${newTodo} added to the list `)

//     }
//     else if (input === 'delete') {
//         const index = parseInt(prompt('Ok, Enter an Index'));
//         if (!Number.isNaN(index)) {
//             const deleted = todos.splice(index, 1);
//             console.log(`Ok ${deleted} is deleted`);
//         }
//         else {
//             console.log('Unknown Index');
//         }

//     }
//     input = prompt("What would want to do?");
// }
// console.log("OK YOU QUIT THE APP");

//functions;

// function singSong() {
//     console.log('DO')
//     console.log('RE')
//     console.log('MO')
//     console.log('N')
// }
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++){
//         result += str;
//     }
//     console.log(result);
// }

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== "number" ) {
//         return false;
//     }
//     let sum = (x + y);
//     return sum;
// }

// function isShortWeather(temperature){
//     if (temperature >= 75){
//         return true;
//     }else {
//         return false;
//     }
// }

// const add = function (x, y){
//     return x+ y;
// }

// function rollDice() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++){
//         f();
//     }
// }

// callTenTimes(rollDice);

// function makeBetweenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }

// const isChild = makeBetweenFunc(1, 18);
// const isAduld = makeBetweenFunc(19, 68);
// const isSenior = makeBetweenFunc(69, 120);

const square = {area(side){
    return side ** 2;
},
perimeter(side){
    return side * 4;
}
}

