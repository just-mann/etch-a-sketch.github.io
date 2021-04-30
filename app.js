console.log('JavaScript connected to HTML');

// Select container
let container = document.getElementById('container');

//Load Default
window.addEventListener('load', defaultFunction);

// Default function
function defaultFunction() {
    setGridSize(16);
    gridFill(16)
}

// GridFill
function gridFill(size) {
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', changeBgColor);
        container.appendChild(div);
    }
}

// Set GridSize
function setGridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

}

// Change Background Color
function changeBgColor(e) {
    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

// Trigger changeGridSize Function
let changeSizeBtn = document.getElementById('changeSizeBtn').addEventListener('click', changeGridSize);


function clear() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}

// Reset or Reload Page
let resetBtn = document.querySelector('.resetBtn').addEventListener('click', () => {
    window.location.reload();
});


// Change Grid size
function changeGridSize() {
    let newSize = prompt('Enter a number: ', 16);
    newSize = parseInt(newSize);
    if (newSize !== null) {
        if(newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
            alert('Please enter a number from 1 - 64');
            changeGridSize();
        } else {
            clear();
            gridFill(newSize);
            setGridSize(newSize);
        }
    }
}

