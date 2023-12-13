const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function SumBorders(matriz) {
    let sumatoria = 0;

    // esto da 6 (1 + 2 + 3) la primera fila
    for (let i = 0; i < matriz.length; i++) {
        sumatoria += matriz[0][i];
    }

    // esto da 24 (7 + 8 + 9) la ultima fila
    for (let i = 0; i < matriz[matriz.length - 1].length; i++) {
        sumatoria += matriz[matriz.length - 1][i];
    }

    // Sumade las 2 columnas (4 + 6)
    for (let i = 1; i < matriz.length - 1; i++) {
        sumatoria += matriz[i][0]; // 4
        sumatoria += matriz[i][matriz[i].length - 1]; // 6 el [length - 1] es para que empieze por el otro lado osea por el 6
    }
// agarro todas las variables sumatoria,las suma y se las manda ala funcion
    return sumatoria;
}

console.log(SumBorders(matriz));
