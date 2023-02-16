// Create 16x16 grid of square divs
const container = document.querySelector('.container');


for (let i = 0; i < 256; i++) {

    // Create a grid square and append to container
    let div = document.createElement('div');
    div.setAttribute('class', 'grid');
    
    container.appendChild(div);

    // Style square grid
    div.style.height = '20px';
    div.style.width = '20px';
    div.style.border = '1px solid black';
}

// Use .forEach to iterate over each grid square
const grids = document.querySelectorAll('.grid');

grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
       grid.style.backgroundColor = 'black';
    });
});

// Button event
const button = document.querySelector('button');
let number = 16;

button.addEventListener('click', () => {
    number = prompt("Number of pixels on one side");
});

