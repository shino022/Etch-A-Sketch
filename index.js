const container = document.querySelector('.container');
const DefaultNumOfGrid = 16;
function createGrid(numOfGrid){
  //remove all contents
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for(let i = 0; i < numOfGrid; i++) {
    //create row
    const row = document.createElement('div');
    row.classList.add('row');
    for(let j = 0; j < numOfGrid; j++) {
      //create a square and append it into the row
      const square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener('mouseover',() => changeColor(square));
      row.appendChild(square);
    }
    //append row into container
    container.appendChild(row);
  }
}
function changeColor(square){
  console.log(square);
  square.style.background='yellow';
}
function changeNumGrid() {
  const userNumOfGrid = prompt("Enter the number of squares per side");
  if(userNumOfGrid>=100){
    return;
  }
  createGrid(userNumOfGrid);
}
createGrid(DefaultNumOfGrid);
