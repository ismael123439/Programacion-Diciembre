let matri = [
            [3, 2, 3],
            [4, 3, 6],
            [3, 8, 3]
            ];

function SumValues() {
    let sum = 0;
    for (let i = 0; i < matri.length; i++) {
        for (let j = 0; j < matri.length; j++) {
            if ([i] % 3 == 0) {
                sum += matri[i][j];
            }
        }
    }
    return sum;
}

console.log(SumValues());
