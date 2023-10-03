const grid = document.querySelector('.grid');
const resetButton = document.querySelector('.reset');
const randomButton = document.querySelector('.random');
const blackButton = document.querySelector('.black');
const eraserButton = document.querySelector('.eraser');

const rangeSlider = document.getElementById("myRange");
const rangeValue = document.querySelector(".range-value");

//show initial slider value
rangeValue.textContent = `${rangeSlider.value}x${rangeSlider.value}`;

rangeSlider.addEventListener('input', function(){
    rangeValue.innerHTML = `${this.value}x${this.value}`;
    removeAllChildNodes(grid);
    createGrid(this.value);
});

const removeAllChildNodes = (parent) => {
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
const createGrid = (numCells = 8) => {
    grid.style.gridTemplateColumns = `repeat(${numCells}, ${500/numCells}px)`;
    grid.style.gridTemplateRows = `repeat(${numCells}, ${500/numCells}px)`;
    for (let rows = 0; rows < numCells; rows++) {
        for (let columns = 0; columns < numCells; columns++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', function(){
                cell.style.backgroundColor = '#28282B';
            });
            grid.appendChild(cell);
        }
    }
}

const getRandomColorHex = () => {
    const hex = '0123456789ABCDEF';
    let output = '';
    for (let i = 0; i < 6; ++i) {
        output += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    colorMode = 'random';
    return output;
}

const makeColorCells = () => {
    const cells = grid.children;
    const range = rangeSlider.value;
    for(let i = 0; i < range*range; i++) {
        cells[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColorHex();
        });
    }
}

const makeBlackCells = () => {
    const cells = grid.children;
    const range = rangeSlider.value;
    for(let i = 0; i < range*range; i++) {
        cells[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = '#28282B';
        });
    }
}

const eraseCells = () => {
    const cells = grid.children;
    const range = rangeSlider.value;
    for(let i = 0; i < range*range; i++) {
        cells[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'lightgrey';
        });
    }
}

//This won't work when I call the event listeners with this 
//and pass into the cell color values.
//I'm not sure why...

// const changeColor = color => {
//     const cells = grid.children;
//     const range = rangeSlider.value;

//     for(let i = 0; i < range*range; i++) {
//         cells[i].addEventListener('mouseover', function(event){
//             event.target.style.backgroundColor = color;
//         })
//     }
// }

const clearGrid = () => {
    document.querySelectorAll('.cell').forEach(function(cell){
        return cell.style.backgroundColor = 'lightgrey';
    });
}

resetButton.addEventListener('click', clearGrid);
randomButton.addEventListener('click', makeColorCells);
blackButton.addEventListener('click', makeBlackCells);
eraserButton.addEventListener('click', eraseCells);

// randomButton.addEventListener('click', changeColor(getRandomColorHex()));
// blackButton.addEventListener('click', changeColor('#28282B'));
// eraserButton.addEventListener('click', eraseCells('lightgrey'));



createGrid();




