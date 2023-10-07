// -- to merge both array together
let arr_1 = [1, 2, 3];
let arr_2 = [4, 5, 6];


// arr_1.push(arr_2);
// console.log(arr_1);
// console.log(arr_1[3]);
// console.log(arr_1[3][0]);
// console.log(arr_1[3][1]);
// console.log(arr_1[3][2]);


// -- push method pushes on existing array but concat gives a new array
// let mergeArr = arr_1.concat(arr_2);
// console.log(mergeArr);


// let mergeWithSpread = [...arr_1,...arr_2];
// console.log(mergeWithSpread);
// console.log(`merge with spread operator ${mergeWithSpread}`);


// let weirdArr = [1,2,3,[4,5,6],7,8,[9,10,11,[12,13,14]],15];
// let flatArr = weirdArr.flat(Infinity);
// console.log(weirdArr);
// console.log(flatArr);



console.log(Array.isArray("umar"));
console.log(Array.isArray([1, 2, 3]));

// it will convert the following in to a array
console.log(Array.from("umar"));

// in this case you have to tell which one to convert in array (key or value) from object.
// the output of the following statement will be an empty array.
console.log(Array.from({ name: "umar" }));

// it will Returns a new array from a set of elements. 
let val1 = 100;
let val2 = 200;
let val3 = 300;
console.log(Array.of(val1, val2, val3));