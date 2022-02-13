//we want to generate a random color and set the body of html to have that color


const h1 = document.querySelector('h1');
const button = document.querySelector('button');
button.addEventListener('click', function () {
    // document.body.style.backgroundColor = 'olive';
    //so this works as it changes the background olive now we need to work on changin it to a random 

    const newColor = makeRandColor()
    document.body.style.backgroundColor = newColor;

    h1.innerText = newColor;




})

const makeRandColor = function () {


    //number using rgb
    //need to generate 3 random numbers from 0 to 255

    //repeat 3 times
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    // const newColor = `rgb(${r}, ${g}, ${b})`; this works or return it
    return `rgb(${r}, ${g}, ${b})`;

}

//come back and make a funtion that handles if the text is against a dark background

