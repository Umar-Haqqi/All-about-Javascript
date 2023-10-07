console.log(addOne(10));
console.log(addThree(100));

function addOne(num) {
    return num + 1;
}


// this will give error
// console.log(addTwo(1)); 

const addTwo = function (num) {
    return num + 10;
}


function addThree(num) {
    return num + 1;
}
