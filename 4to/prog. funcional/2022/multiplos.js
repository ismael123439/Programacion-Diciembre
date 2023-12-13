let numeros = [3, 6, 4, 12, 5, 18];
let numeroBase = 3;

function Multiples(arr, n) {
    return arr.filter(num => num % n === 0);
}

let multiplos = Multiples(numeros, numeroBase);

console.log(multiplos);
