const container = document.querySelector('.container')
const sizeOfGrid = 16
const createGrid = (amtOfGrids) => {
    for (let i = 0; i < amtOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row')
    for (let j = 0; j < amtOfGrids; j++) {
        const gridBox = document.createElement('div')
        gridBox.classList.add('grid-box')

        gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor = 'black'
        })
        row.appendChild(gridBox)
    }

    container.appendChild(row)
    }
}

createGrid(sizeOfGrid)
