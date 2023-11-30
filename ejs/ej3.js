let matri = [[1,2,4],
             [4,5,6],
             [7,8,9]];

function sumdiagonalinvers(){
    let acum = 0;
    for(let i = 0; i < matri.length;i++){
        acum += matri[0][2] + matri[1][1] + matri[2][0]
    }
    return acum % 3;
}

console.log(sumdiagonalinvers());