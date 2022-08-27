const container = document.querySelector('#grid');
const btn = document.querySelector('button');

btn.addEventListener('click', numSquares);

function numSquares() {
    let selection = prompt('Number of squares');
    container.style.gridTemplateColumns = `repeat(${selection}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${selection}, 1fr)`;
    let squares = container.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    let mount = selection * selection;

    for(let i = 0; i < mount; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'blue';
        container.insertAdjacentElement('beforeend', square);
        square.addEventListener('mouseenter', () => square.style.backgroundColor = 'red');
        square.addEventListener('mouseleave', () => square.style.backgroundColor = 'blue');

    };

    if(selection == '' || selection > 100) {
        alert('Exceeded number of squares');
        location.reload();
    }
};
