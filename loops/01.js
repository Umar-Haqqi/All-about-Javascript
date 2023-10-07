for (let i = 1; i <= 3; i++) {
    // console.log(`outer loop i: ${i}`);
    for (let j = 1; j <= 3; j++) {
        // console.log(`inner loop j: ${j} and outer loop i: ${i}`);
    }
    // console.log("*** loop ends ***");
}

myArr = ["11","22","33","44","55"];
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}

for (let index = 1; index <= 20; index++) {
    if(index === 5){
        // console.log(`detected ${index}`);
        break;
    }
    // console.log(index);
}

for (let index = 1; index <= 10; index++) {
    if(index === 5){
        // console.log(`detected ${index}`);
        continue;
    }
    // console.log(index);
}