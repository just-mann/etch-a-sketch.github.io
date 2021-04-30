console.log('Script File Connected...');

let container = document.getElementById('container');

let resetBtn = document.getElementById('resetBtn');

// let randomColor = Math.floor(Math.random() * 16777215).toString();


for (let i = 0; i < 16 * 16; i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', (e) => {
        // let hoverDiv = e.target;
            // hoverDiv.style.backgroundColor = '#' + randomColor;
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    });
    container.appendChild(div);
}


// Reset Page
resetBtn.addEventListener('click', () => {
    window.location.reload();
})
