// console.log("execution starts");

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // console.log("async task 1 is completed");
        resolve();
    }, 3000)

})
promiseOne.then(function () {
    // console.log("First promise consumed");
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("async task 2 is completed");
        resolve();
    }, 1000)
}).then(() => {
    // console.log("Second promise consumed");
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(
            {
                username: "umar",
                email: "umar@abc.com"
            }
        )
    }, 1000)
})
promiseThree.then((userData) => {
    // console.log(`promise three is consumed and the current user is: ${userData.username}`);
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        
        if (!error) {
            resolve(
                {
                    username: "umar haqqui",
                    password: "password"
                }
            )
        }
        else {
            reject("Error! something went wrong");
        }
    }, 3000)
})

promiseFour
    .then((data) => {
        // console.log(data);
        return data.username;
    })
    .then((userName) => {
        console.log(`current user: ${userName}`);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => console.log("finally msg: promise is either resolve or rejected"));