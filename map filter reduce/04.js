const myNum = [1, 2, 3, 4];

// const totalNum = myNum.reduce((acc, currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0);

const totalNum = myNum.reduce((acc, currval) => acc + currval, 0)

console.log(totalNum);



