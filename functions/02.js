function func(val1, val2, ...num1) {
    return num1;
}
// console.log(func(11, 22, 33, 44, 55));


// how to pass and use object in function
const user1 = {
    username: "Umar",
    age: 15
}
const user2 = {
    username: "Ali",
    age: 22
}

const handleObj = (anyObject) => {
    // console.log(`current user is ${anyObject.username} and age is ${anyObject.age}`);
}

// handleObj(user1);
// handleObj(user2);
handleObj({
    username: "ahmed",
    age: 12
})


const myArr1 = [1, 2, 3, 4]
const myArr2 = [10, 20, 30, 40]

const getArrVal = (ArrVal) => {
    return ArrVal[0];
}
console.log(getArrVal(myArr1));
console.log(getArrVal(myArr2));
console.log(getArrVal([100, 200, 300, 400]));

