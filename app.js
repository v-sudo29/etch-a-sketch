// Create 16x16 grid of square divs
const container = document.querySelector('.container');


for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.setAttribute('id', 'grid');
    container.appendChild(div);
}