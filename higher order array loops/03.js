// for each loop
const myLang = ["HTML", "CSS", "JS", "Node", "react"];

// myLang.forEach((item) => {
//     console.log(item);
// })

// function printLang(items){
//     console.log(items);
// }

// just give function reference, no need to execute
// myLang.forEach(printLang);

// myLang.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


const arrOfObj = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    },
]
arrOfObj.forEach((item) => {
    console.log(`programming language is ${item.langName} and its extension is ${item.langFileName}`);
})