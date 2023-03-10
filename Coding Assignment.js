// assignment 1
// create an array containing predetermined ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 1a: subtract the value of the 1st element from last element in the array
function firstFromLast(){
    let last = ages[ages.length-1];
    let first = ages[0];
    let firstFromLast = (last - first);
    console.log (firstFromLast);
}
// invoke function to print the result
firstFromLast()

// 1b: push another element to the array
ages.push(5)

// invoke the function with the new values
firstFromLast()

// 1c: create a loop to iterate through the array and calculate the average age
// initialize a variable to store the sum of all numbers in the array
let sum = 0;

// loop through the array and add each number to the sum variable
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

// calculate the average by dividing the sum by the length of the array
const average = sum / ages.length;

// log the average to the console rounded to 2 decimals
console.log(average.toFixed(2));

// assignment 2
// create an array with predetermined values
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// 2a: use a loop to iterate through the array and calculate the average number of letters per name
// initialize a variable to store the sum of letters in each name in the array
let letterSum = (0);

// loop through the array and add the total number of letters to the sum variable
for (let i = 0; i < names.length; i++) {
letterSum += names[i].length;
}

// divide the total number of letters by the number of elements
let letterAverage = (letterSum / names.length);

// log the average to the console rounded to 2 decimals
console.log(letterAverage.toFixed(2));

// 2b: use a loop to concatenate all the names together separated by spaces
// no loop needed, print to the console using the join method
console.log(names.join(' '));

// 3: how do you access the last element of an array?
// using the .length method -1 to specify the index number
let lastElement = (names.length - 1);

// 4: how do you acces the first element in an array?
// the first element will always be [0] index
let firstElement = names[0];

// 5: create new array nameLengths, write a loop to iterate over the previously created names array
// and add the length of each name
// create new array variable for the name lengths to enter
let nameLengths = []

// loop to iterate through previous array and push the values of the length of each string to the new array
 for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
 }

 // print the new array to the console
console.log(nameLengths);

// 6: write a loop to iterate over the nameLengths array and calculate the sum of all the elements
// create a variable to hold the sum of the elements
let nameSum = (0)

for (let i = 0; i < nameLengths.length; i++) {
    nameSum += nameLengths[i];
}
// print sum to the console
console.log(nameSum);


// 7: create a function that takes 2 parameters (word, n) and returns the word concatenated to itself 'n' number of times
function concatenateWord(word, n){
    return word.repeat(n);
}

// pass in the word 'Hello' and 3
console.log(concatenateWord('Hello', 3));

// 8: write a function that takes 2 parameters, firstName and lastName and returns a full name
function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
}
// print to console
console.log(fullName('Lauren', 'DeLong'));

// 9: write a function that takes an array of numbers and returns true if the sum of all numbers is greater than 100
function greaterThan100(numbers){
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum > 100;
    }

// run function witth array entered and print to console
console.log(greaterThan100([40, 50, 50]));

// 10: write a function that takes an array of numbers and returns the average of all elements in array
function averageArray(numbers){
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length
}
// print to console to test the function
console.log(averageArray([5,6,7]))

// 11: write a function that takes 2 arrays of numbers and and returns true if the average of the elements 
// in the first array is greater than the elements in the second array
function averageOf2Arrays(array1, array2){
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0, j = 0; i < array1.length && j < array2.length; i++, j++){
        sum1 += array1[i], sum2 += array2[j];}
    let average1 = sum1 / array1.length;
    let average2 = sum2 / array2.length;
    return average1 > average2;
    }
// print to console to test function
console.log(averageOf2Arrays([3, 3, 3], [2, 2, 2]));
console.log(averageOf2Arrays([3, 3, 3], [6, 6, 6]));

// 12: write a function that takes a boolean and a number and returns true if is true & number is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket){
    return isHotOutside == true && moneyInPocket >= 10.5;
}
// print to console to test function
console.log(willBuyDrink(true, 13));
console.log(willBuyDrink(true, 9));
console.log(willBuyDrink(false, 12));

// 13: create a function of your own that solves a problem
function welcomeMessage(firstName, lastName){
let firstInitial = (firstName.charAt(0));
let lastInitial = (lastName.charAt(0));
let initials = firstInitial + lastInitial;
return 'Hello ' + firstName + lastName + '! Your initials are ' + initials + ' Have a nice day!'
}
alert(welcomeMessage("Lauren", "DeLong"));

