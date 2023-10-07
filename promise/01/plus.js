async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data[3].name);
    } catch (err) {
        console.log("error", err);
    }
}
fetchUsers();



// const fetchUsers = new Promise((resolve, reject) => {
//     const response = fetch('https://jsonplaceholder.typicode.com/users');
//     // const data = response.json();
//     resolve(response);
// })
// fetchUsers.then((res)=>{
//     console.log(res);
// })


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })