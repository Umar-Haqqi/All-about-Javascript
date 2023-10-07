// if a object is made with constructor it will be a singleton
// Object.create


// object literals

const mysym = Symbol("Key1");

const obj = {
    name:"umar",
    "full name": "umar haqqui",
    [mysym]: "mykey",
    age: 21
}

// console.log(obj.name);
// console.log(obj["full name"]);
// console.log(obj[mysym]);
// obj.name = "Umar"
// obj["full name"] = "muhammad umar haqqui";
// console.log(obj.name);
// console.log(obj["full name"]);
// console.log(obj.age = 22);
// Object.freeze(obj);
// console.log(obj.age = 29);
// console.log(obj);

obj.greeting = function(){
    console.log(`hello ${this.name} and your age is ${this.age}`);
}

console.log(obj.greeting());
