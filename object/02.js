// singleton object
// const myObj = new Object();
// myObj.name = "umar";
// myObj.lastName = "haqqui";
// console.log(myObj);


// const obj1 = { 1: "a", 4: "b" };
// const obj2 = { 2: "a", 5: "b" };
// const obj3 = { 3: "a", 6: "b" };

// const obj4 = Object.assign(obj1, obj2, obj3);
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// const obj4 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj4);


const currentUser = {
    name: "umar",
    age: 22
}
console.log(Object.keys(currentUser));
console.log(Object.values(currentUser));
console.log(Object.entries(currentUser));