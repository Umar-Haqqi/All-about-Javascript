// function func(){
//     let username = "uamr";
//     console.log(this);
//     console.log(this.username); //  this will not work in function
// }
// func();

// const func = function () {
//     let username = "uamr";
//     console.log(this);
//     console.log(this.username); //  this will also not work in function
// }
// func();

// const func = ()=>{
//     let username = "uamr";
//     console.log(this);
//     console.log(this.username); //  this will also not work in function
// }
// func();



// arrow function
// const addTwoNum = (num1, num2) => {
//     return num1 + num2;
// }

// implicit return: if statement is of 1 line then no need to write {} and return keyword 
// const addTwoNum = (num1, num2) => num1 + num2;

// const addTwoNum = (num1, num2) => (num1 + num2);
// if not using {} then no need to write return keyword
// if using {} then always write return keyword

// to return a object use () around
const addTwoNum = (num1, num2) => ({currentUser: "umar"});



console.log(addTwoNum(19, 21));