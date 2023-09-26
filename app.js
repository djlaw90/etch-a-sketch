// Create the divs using JavaScript. Don’t try making them by hand
//  with copy and pasting in your HTML file!
// It’s best to put your grid squares inside another “container” div
//  (which can go directly in your HTML).
// You need to make the divs appear as a grid (versus just one on each line).

const grid = document.querySelector('.grid');

const rangeSlider = document.getElementById("myRange");
const rangeValue = document.querySelector(".range-value");
rangeValue.innerHTML = rangeSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
rangeSlider.oninput = function() {
  rangeValue.innerHTML = this.value;
  displayGrid(this.value);
}


const displayGrid = (value = 16) => {
    grid.style.gridTemplateColumns = `repeat(${value}, auto)`;
    grid.style.gridTemplateRows = `repeat(${value}, auto)`;
    for (let i = 0; i < value; i++) {
        for (let j = 0; j < value; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', function(){
                cell.style.backgroundColor = '#28282B';
            });
            grid.appendChild(cell);
        }
    }
}

displayGrid();





