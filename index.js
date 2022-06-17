const container = document.querySelector('.container');
const numOfGrid = 16;
for(let i = 0; i < numOfGrid; i++) {
  //create row
  const row = document.createElement('div');
  row.classList.add('row');
  for(let j = 0; j < numOfGrid; j++) {
    //create a square and append it into the row
    const square = document.createElement('div');
    square.classList.add('square');
    row.appendChild(square);
  }
  //append row into container
  container.appendChild(row);
}

function changeNumGrid() {
  let numOfGridInput = prompt("Enter the number of squares per side");

}