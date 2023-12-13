let mat = [[2, 3, 5],
[4, 6, 2],
[2, 180, 5]];

let l = mat.length;

function SumElems() {
    let sum = 0;
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l; j++) {
            if (mat[i][j]%2 === 0 && mat[i][j] <= 100 && mat[i][j] %  6 === 0 )
            sum += mat[i][j]
        }
    }
    return sum
}

console.log(SumElems())


