const numeros = [5, 10, 15, 20, 25];

function Average(arr) {
    let sumatoria = 0;
    for (let i = 0; i < arr.length; i++) {
        sumatoria += arr[i];
    }

    promedio = sumatoria / arr.length;
    return promedio;
}

console.log( Average(numeros));
