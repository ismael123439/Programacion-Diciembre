function average(etapa1, etapa2) {
    let promT = 0;
    let prom1 = 0;
    let prom2 = 0;
   prom1 = etapa1 / etapa1.length
   prom2 = etapa2 % etapa2.length
    promT = prom1 + prom2
    return prom1
}

console.log(average([7, 4, 4],[3, 1, 3, 8, 4]))