const box = document.querySelectorAll('.square');

const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

const randomColor = () => {
    const red = randomNumber(0, 255);
    const green = randomNumber(0, 255);
    const blue = randomNumber(0, 255);

    return `rgb(${red}, ${green}, ${blue})`;
}


box.forEach((item) => {
    console.log(item.style.backgroundColor = randomColor());
});
