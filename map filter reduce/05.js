const selectedCourse = [
    {
        courseName: "Javascript",
        price: 1999
    },
    {
        courseName: "React JS",
        price: 2999
    }, {
        courseName: "Next JS",
        price: 4999
    }
];

const Bill = selectedCourse.reduce((acc, item) => acc + item.price, 2)
console.log(`Your bill is ${Bill}`);