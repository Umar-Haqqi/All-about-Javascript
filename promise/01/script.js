const myPromise = new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
        resolve(
            {
                username: "M. Umar Haqqui",
                age: 22
            }
        )
    }
    else {
        reject("sorry something went wrong")
    }
})

async function consumePromise() {
    try {
        const response = await myPromise;
        console.log("current user: " + response.username);
        console.log("user's age: " + response.age);
    } catch (err) {
        console.log(err);
    }
}
consumePromise();