let arr = [3, 5, 76, 5, 3];

function oddidex(arr) {
    let sum = 0;
    for (let i = 1; i < arr.length; i+= 2) {
        sum += arr[i]
    }
    return sum;
}

console.log(oddidex(arr));

// simar una matriz facil  console.log(arr = [5,4,7,9,3,5,7].reduce((a,b)=> a+b));
