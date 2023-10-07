// 


function loginMessage(username = "sam") {
    if (!username) {
        console.log("please, enter a username");
        // return;
    }
    else {
        return `${username} just login`;
    }

}

let showMessage = loginMessage();
console.log(showMessage);