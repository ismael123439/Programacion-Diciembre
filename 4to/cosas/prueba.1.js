let matri = [
    [3, 1, 2],
    [8, 3, 9],
    [5, 9, 2]
];

let aux = 0;

function diagonales() {
 let aux = matri[matri.length -1][0] += matri[matri.length % 2][matri.length % 2] += matri[matri.length -1][matri.length -1]

return aux;
}

console.log(diagonales())









// for(let i =0 ; i<matri.length;i++){
//     mod = matri[i].filter(n=> n < 5);
//    res = mod += mod
//    console.log(res);
// }

// let plano = matri[0].reduce((a,b) => a.concat(b) , []).reduce((c,d)=> c + d,0 );
// console.log(matri[1][2])

//   let aux = 0;






//   function diagonal() {
//     for (let i = 0; i < matri.length; i++) {
//       aux += matri[i][i];
//     }
//     return aux;
//   }
//   console.log(diagonal());
//      let borde1 = 0;
//      let borde2 = 0;
//     // let acum =0;






// function sumBordes (){
//     for (let i = 0;i < matri.length ; i++){
//         borde1 += matri[i][0]
//         borde2 += matri[i][matri.length-1]
//     }
//     return borde2 + borde1;
// }

// console.log(sumBordes())  