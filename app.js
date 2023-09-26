// Create the divs using JavaScript. Don’t try making them by hand
//  with copy and pasting in your HTML file!
// It’s best to put your grid squares inside another “container” div
//  (which can go directly in your HTML).
// You need to make the divs appear as a grid (versus just one on each line).

const grid = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
  }
}