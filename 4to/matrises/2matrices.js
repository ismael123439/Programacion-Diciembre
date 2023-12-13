let mat1 = [[2, 4, 1],
[9, 8, 1],
[2, 6, 4]];

let mat2 = [[1, 2, 3],
[2, 3, 6],
[6, 7, 8]];

let l = mat1.length;
let q = mat2.length;

let resul = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0]];

function SumMatrix() {
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < q; j++) {
            let sum = mat1[i][j] + mat2[i][j];
            resul[i][j] = sum;
        }
    }
    return resul;
}
console.log(SumMatrix());
