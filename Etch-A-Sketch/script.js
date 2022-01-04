const body = document.querySelector('body');
let colorMode = 3

// generates title
const titleBox = document.createElement('div');
const title = document.createElement('h1');
title.innerText = 'Etch-A-Sketch!';
titleBox.classList.add('titleBox');
title.classList.add('title')
titleBox.appendChild(title);
body.appendChild(titleBox);


const gameboard = document.createElement('div');
body.appendChild(gameboard);

const color = () => {
    switch (colorMode) {
        case 1:
            return 'black';
        case 2:
            return 'white';
        case 3:
            let colors = ['#00EAD3', '#FFF5B7', '#FF449F', '#005F99']
            return colors[Math.floor(Math.random() * colors.length)];
        default:
            return 'black';
    }
}

// generates sketch grid
const createBoard = (n) => {
    console.log(n);
    // check for and remove previous gameboard
    const oldGameCells = document.getElementsByClassName('gameCell');
    while (oldGameCells.length > 0) oldGameCells[0].remove();

    // creates new board
    for (let i = 0; i < n; i++) {
        gameboard.appendChild(document.createElement('div'))
    }
    gameboard.childNodes.forEach(div => {
        div.style.height = `calc(35vw / ${Math.sqrt(n)})`;
        div.classList.add('gameCell');
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = color()
        })
    })
    gameboard.classList.add('board')
    gameboard.style.gridTemplateColumns = 'auto '.repeat(Math.sqrt(n));
}
createBoard(600)

const controllerDiv = document.createElement('div');
controllerDiv.classList.add('controllerDiv')
body.appendChild(controllerDiv)

// creates slider to control board dimentions
const sliderDiv = document.createElement('div');
sliderDiv.classList.add('sliderDiv')
sliderDiv.classList.add('control')
const sliderLabel = document.createElement('span');
sliderLabel.textContent = 'Slide to change pixel size'
const slider = document.createElement('input');
slider.type = 'range';
slider.min = '20';
slider.value = '20';
slider.max = '80';
sliderDiv.appendChild(sliderLabel)
sliderDiv.appendChild(slider)
controllerDiv.appendChild(sliderDiv);
slider.addEventListener('change', e => createBoard(e.target.value * e.target.value))


// buttons to change color of sketch tool
const btnBlack = document.createElement('button')
btnBlack.textContent = 'Black'
btnBlack.classList.add('control')
btnBlack.onclick = ()=>colorMode = 1;
controllerDiv.appendChild(btnBlack)

const btnErase = document.createElement('button')
btnErase.textContent = 'Eraser'
btnErase.classList.add('control')
btnErase.onclick = ()=> colorMode = 2;
controllerDiv.appendChild(btnErase)

const btnColors = document.createElement('button')
btnColors.textContent = 'Colors'
btnColors.classList.add('control')
btnColors.onclick = ()=> colorMode = 3;
controllerDiv.appendChild(btnColors)