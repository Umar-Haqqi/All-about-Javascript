const user = {
    username: "umar",
    age: 22,
    welcomeMsg: function () {
        console.log(`welcome ${this.username}`);
        console.log(this); // current context/values
    }
}

user.welcomeMsg();
user.username = "ali";
user.welcomeMsg();

console.log(this);
// in this case in node, it will give an empty object, but in browser it will give a window object, because global object in browser is window object.