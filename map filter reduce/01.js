// const myLang = ["HTML", "CSS", "JS"];

// const values = myLang.forEach((item) => {
//     console.log("items: " + item);
//     return item;
// })
// console.log("values: " + values);
// in this case forEach will be only return undefined



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = myNums.filter((num) => {
    return num > 4;
});
// console.log(result);


// --- same work with forEach
const newNums = [];
// console.log(newNums);
myNums.forEach((num) => {
    if (num > 5) {
        newNums.push(num);
    }
})
// console.log(newNums);



