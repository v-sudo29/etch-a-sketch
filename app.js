// Global variables
const container = document.querySelector('.container');
const DEFAULT_NUMBER = 16;
let number = DEFAULT_NUMBER;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false); 

// Function to create a grid of any number of squares
function createGrid(number) {
    height = 480 / number;
    width = 480 / number;

    for (let i = 0; i < number * number; i++) {
        
        // Create a grid square and append to container
        let div = document.createElement('div');
        div.setAttribute('class', 'grid');
        container.appendChild(div);

        // Add event listeners to change grid color
        div.addEventListener('mouseover', changeColor);
        div.addEventListener('mousedown', changeColor);
    
        // Style square grid
        div.style.height = height + 'px';
        div.style.width = width + 'px';
        div.style.border = '1px solid black';
    }
}

// Function resets grids to white background
function reset() {
    let currentGrids = document.querySelectorAll('.grid');
    currentGrids.forEach((grid) => {
        grid.style.backgroundColor = 'white';
    });
}

// Function that changes grid color when user 'drags' mouse
function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return;
    }
    e.target.style.backgroundColor = 'black';
}

// BUTTON: Set Size
const setButton = document.querySelector('.set');
setButton.addEventListener('click', () => {

    // Prompt user to give an acceptable number
    do {
        number = prompt('Choose a number from 2-64');
    } while (number < 2 || number > 64);

    // Remove existing grid
    let currentGrids = document.querySelectorAll('.grid');
    currentGrids.forEach((grid) => grid.remove());

    // Add new grid
    createGrid(number);
});

// BUTTON: Reset
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', reset);

// Create default grid
let defaultGrid = createGrid(number);