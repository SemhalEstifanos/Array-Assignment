// 1,Finding last element of array

let arr1 = [3, 7, 34, 90, 12];
let arr2 = [true, "green", "where", 12, 56];

let lastElementArr1 = arr1[arr1.length - 1];
let lastElementArr2 = arr2[arr2.length - 1];

console.log("Last element of arr1 is", lastElementArr1);
console.log("Last element of arr2 is", lastElementArr2);

//2,Joins array elements into string

let myPets = ["Cow", "Bird", "Snake", "Dog"];

let mypetsString = myPets.join(", ");
console.log("My pets are " + mypetsString);

//3,Sorting array items

var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];

arr3.sort((a, b) => a - b);
console.log("Sorted array:", arr3);


