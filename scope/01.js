// {} are scope

function one() {
    const username = "umar";

    // in nested function child can access parent variable
    function two() {
        const lastname = "haqqui";
        console.log(username);
    }

    // console.log(lastname); outside the scope this will give a error and stop further execution
    two();
}
one();


if (true) {
    const username = "ali";
    
    if (username === "ali") {
        const lastname = " ahmed";
        console.log(username + lastname);
    }
    // console.log(lastname); outside the scope this will give a error and stop further execution
}
// console.log(username); outside the scope this will give a error and stop further execution