const container = document.querySelector('.container')



function populateBoard(num = 16) {
    const container = document.querySelector('.container');
    width = container.offsetWidth
    height = container.offsetHeight
    size = Number(width / num)
    for (let i= 0; i < num**2; i++) {
        box = createBox(size)

        container.appendChild(box)
    }

}

function createBox(size) {
    const box = document.createElement('div');
    box.setAttribute('id','box');  

    box.style.height = parseFloat(size) + "px";
    box.style.width = parseFloat(size) + "px";

    return box  
}

function clearBoard() {
    const boxes = document.querySelectorAll('#box')
    boxes.forEach(box => box.remove())
}

function repopulateBoard() {
    clearBoard();
    let canvasSize = this.value 
    populateBoard(canvasSize)
    addEventListeners()
    const gridLabel = document.querySelector('#grid-label')
    gridLabel.textContent= `Current Canvas Size: ${canvasSize}x${canvasSize}`
}

function updateCell() {
    this.style.backgroundColor = `${color.value}`
}

function resetCells() {
    console.log('hi')
    const boxes = container.querySelectorAll('#box');
    for (let i=0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = ""
    }
}

function addEventListeners() {
    const boxes = container.querySelectorAll('#box');

    boxes.forEach(box => box.addEventListener('mouseover', updateCell))

    const resetButton = document.querySelector('#reset')
    resetButton.addEventListener('click', resetCells)

    const gridSizeSelector = document.querySelector('#grid-size')
    gridSizeSelector.addEventListener('change', repopulateBoard)
}

populateBoard(16)

addEventListeners()


