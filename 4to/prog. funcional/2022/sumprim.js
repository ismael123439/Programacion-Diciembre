//console.log(arr = [5,4,7,8,3,12,7].filter(x => x%2 !== 0)).reduce((a,b) => a+b));

arr = [5,4,7,8,3,12,7];

function sumprimos(){
    return arr.filter(x => x%2 !== 0).reduce((a,b) => a+b);
}

console.log(sumprimos());