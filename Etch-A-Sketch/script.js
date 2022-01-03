const body = document.querySelector('body');

// generates title
const titleBox = document.createElement('div');
const title = document.createElement('h1');
title.innerText = 'Etch-A-Sketch!';
titleBox.appendChild(title);
body.appendChild(titleBox);

// generates sketch grid
const createBoard = (n) => {
    const gameboard = document.createElement('div');
    const gameCell = document.createElement('div');
    gameCell.classList.add('gameCell');
    gameCell.style.height = `calc(30vw / ${n/4})`;
    for (let i = 0; i < n; i++) {
        gameboard.appendChild(document.createElement('div'))
    }
    gameboard.childNodes.forEach(div => {
        div.style.height = `calc(30vw / ${Math.sqrt(n)})`;
        div.classList.add('gameCell');
    })
    gameboard.classList.add('board')
    gameboard.style.gridTemplateColumns = 'auto '.repeat(Math.sqrt(n));
    body.appendChild(gameboard);
}


// creates slider to control board dimentions
const slider = document.createElement('input');
slider.type = 'range';
slider.list = 'list';
const optionList = document.createElement('datalist');
optionList.id = 'list';
for(let i = 10; i<50; i+=10){
    let node = document.createElement('option');
    node.value = i;
    optionList.appendChild(document.createElement('option'));
}
body.appendChild(slider);
body.appendChild(optionList);
slider.addEventListener('change', e => createBoard(e.target.value * e.target.value))