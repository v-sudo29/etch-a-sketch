// Create 16x16 grid of square divs
const container = document.querySelector('.container');
let number = 16;

// Function to create a grid of any number of squares
function createGrid(number) {
    height = 480 / number;
    width = 480 / number;

    for (let i = 0; i < number * number; i++) {
        
        // Create a grid square and append to container
        let div = document.createElement('div');
        div.setAttribute('class', 'grid');
        
        container.appendChild(div);
    
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

// BUTTON: Set Size
const button = document.querySelector('button');
button.addEventListener('click', () => {

    // Prompt user to give an acceptable number
    do {
        number = prompt('Number');
    } while (number < 2 || number > 64);

    // Remove existing grid
    let currentGrids = document.querySelectorAll('.grid');
    currentGrids.forEach((grid) => {
        grid.remove();
    });

    // Add new grid
    createGrid(number);
    currentGrids = document.querySelectorAll('.grid');
    currentGrids.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'black';
         });
    });
});

// BUTTON: Reset
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', reset);

// Create default grid
let defaultGrid = createGrid(number);

// DEFAULT: Use .forEach to iterate over each grid square
let grids = document.querySelectorAll('.grid');

grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
       grid.style.backgroundColor = 'black';
    });
});