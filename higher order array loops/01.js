// for of loop
let myArray = [1, 2, 3, 4, 5];

// console.log("simple for loop");
for (let i = 0; i < myArray.length; i++) {
    // console.log(myArray[i]);
}

// console.log("forOf loop");
for (const val of myArray) {
    // console.log(val);
}

let greeting = "Hello World!";
for (const greet of greeting) {
    // console.log(`Each char is: ${greet}`);
}


// Map
const map = new Map();

map.set('Ind', "India");
map.set('Pak', "Pakistan");
map.set('Sri', "Srilanka");
map.set('Pak', "Pakistan"); // it will not print, map only works for unique values

// console.log(map);

for (const mapVal of map) {
    // console.log(mapVal);
}
for (const [key, value] of map) {
    // console.log(key +' |-- '+ value);
}

// This will not execute because object here is not iteratable 
// forOf loop is not working for object
// const myObj = {
//     '1': 'umar',
//     '2': 'ali',
//     '3': 'Ahmed'
// }
// for (const [key, val] of myObj) {
//     console.log(`key: ${key} and value is: ${val}` );
// }