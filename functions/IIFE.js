// immediately invoked function expression (IIFE)

(function func_one() {
    console.log("Named IIFE, DB connected");
})();

((myName) => {
    console.log(`Simple IIFE, DB connected ${myName}`);
})("hello world");