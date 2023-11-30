let matri = [[1,2,3],
             [4,5,6],
             [7,8,9]];

function sumdiagonal(){
    let acum = 0;
    for(let i = 0; i < matri.length;i++){
        acum += matri[i][i]
    }
    return acum;
}

console.log(sumdiagonal());