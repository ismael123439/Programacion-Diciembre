let palabra = "jojoj";
let parte1 = "";
let parte2 = "";

function Palindromo(palabra, i1, i2) {
  let med = Math.floor(palabra.length / 2); 
  if (i1 <= med) {
    parte1 += palabra[i1];
    parte2 += palabra[i2];
    return Palindromo(palabra, i1+1, i2-1);
  }
  if (parte1 == parte2){
    return true;
  }else{
    return false;
  }

}

console.log(Palindromo(palabra, 0, palabra.length - 1));
