const body = document.body


// creates the board
function createDivs(askUser, startHeight, startWidth) {
for(x = 0; x < askUser; x++) {
    const row = document.createElement('div');
    row.className = 'gridDivs';
    document.getElementById('board').appendChild(row);
    row.style.height = startHeight + 'px';
    row.style.width = startWidth + 'px';
}};
createDivs(256, 58, 58);


// adds the hover effect
function hoverEffect() {
const row = document.querySelectorAll('.gridDivs');
// selects each div in the row nodelist
row.forEach((row) => {
    row.addEventListener('mouseover', () => {
    row.style.backgroundColor = 'black';
        })
});    
}
hoverEffect();


// creates new grid based on the users choice of squares
function resetBtn() {
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', () => {
    let newDimension = prompt("how many squares per side?");
// gets the number for the number of divs for the new grid
    let parentElement = document.getElementById('board')
    divHeight = divSize(newDimension);
    divWidth = divSize(newDimension);
    parentElement.replaceChildren()   
    if (newDimension < 100) {
        newDimension = (newDimension * newDimension)
    } else {
        newDimension = (16 * 16)
    }
    createDivs(newDimension, divHeight, divWidth), hoverEffect();
    });
}
resetBtn();


// gets the size of the divs inside the container
function divSize(squareDim) {
    let newHeight = (960 / squareDim) - 2;
    let newWidth = (960 / squareDim) - 2;
    return newHeight, newWidth
}



// 960 / askUser - 2 = minHeight and minWidth