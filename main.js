const hexValueElement = document.querySelector('.hex-value');

function generateHEX() {
    let randomHex =
        Math.random() //random number between 0 and 1
            .toString(16) // covert that number
            .substr(-6); // grab last 6 digit string
    let randomHexColor = `#${randomHex}`;
    hexValueElement.textContent = randomHexColor;
    document.body.style.background = randomHexColor;
}

function keybord(event) {
    if (event.code == 'Space'){
        generateHEX();
    }
}
// when user click on HEX value
hexValueElement.addEventListener('clik', generateHEX, );

// when user clicks on spacebars
window.addEventListener('keydown', keybord);