//console.log(arr.split("").filter(x => x === "a" || x === "e" || x === "i" || x === "o" || x === "u").length);

let arr = "arboleda";

function cont(arr) {
  return arr
    .split("")
    .filter(x => x == "a" || x == "e" || x == "i" || x == "o" || x == "u")
    .length;
}

console.log(cont(arr)); 
