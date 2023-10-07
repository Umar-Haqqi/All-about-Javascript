// to generate a random hex code
const colorChanger = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
// console.log(colorChanger());

let intervalId;

const startChanging = () => {
    const bgClrChange = () => {
        document.body.style.backgroundColor = colorChanger();

        let hexCode = document.querySelector('h2');
        hexCode.innerHTML = colorChanger();
    }

    intervalId = setInterval(bgClrChange, 1000)
}
const stopChanging = () => {
    clearTimeout(intervalId)
}

document.querySelector('#start').addEventListener('click', startChanging)
document.querySelector('#stop').addEventListener('click', stopChanging)


