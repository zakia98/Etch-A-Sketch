
function populateBoard(num = 16) {
    for (let i= 0; i < num; i++) {
        box = createBox()
        container.appendChild(box)
        console.log('printed box')
    }

}

function createBox() {
    const container = document.querySelector('#container');
    const box = document.createElement('div');
    box.classList.add('box');  
    return box  
}

populateBoard(16)