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

function updateCell() {
    this.style.backgroundColor = `${color.value}`
}

populateBoard(32)


const boxes = container.querySelectorAll('#box');

boxes.forEach(box => box.addEventListener('mouseover', updateCell))