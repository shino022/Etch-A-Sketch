const container = document.querySelector('.container');
const numOfGrid = 16;
for(let i = 0; i < numOfGrid; i++) {
  //create row
  const row = document.createElement('div');
  row.classList.add('row');
  for(let j = 0; j < numOfGrid; j++) {
    //create a square and append it into the row
  }
  //append row into container
  container.appendChild(row);
}