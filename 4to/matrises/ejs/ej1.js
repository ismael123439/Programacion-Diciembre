let matri = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

function sumbordes() {
  let acum = 0;
  for (let i = 0; i < matri.length; i++) {

    acum += matri[i][0] + matri[i][matri.length - 1];
    
  }
  return acum;
}

console.log(sumbordes());