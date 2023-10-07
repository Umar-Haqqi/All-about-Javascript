// forIn loop
const myObj = {
    lang1: "Javascript",
    lang2: "C++",
    lang3: "Phyton",
    lang4: "Java",
}
for (const key in myObj) {
    console.log(`${key} is ${myObj[key]}`);
}


const myArr = ["HTML", "CSS", "JS"]
for (const key in myArr) {
    console.log("for In " + myArr[key]);
}
for (const val of myArr) {
    console.log("for In " + val);
}