// Define una matriz de ejemplo
const matrizEjemplo = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];

// Usa map para obtener un array de sumas de cada fila
const sumasPorFila = matrizEjemplo.map(fila => fila.reduce((acumulador, elemento) => acumulador + elemento, 0));

// Usa reduce para sumar todas las sumas obtenidas
const resultado = sumasPorFila.reduce((acumulador, suma) => acumulador + suma, 0);

console.log(resultado); // Salida: 9
