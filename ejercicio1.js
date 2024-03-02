/*  Crear una función que tome como parámetro un arreglo de números, 
    retornar un dato de tipo número con la suma de todos los números pares */

function sumarPares(numeros) {
  let sum = 0;
  numeros.forEach((num) => (num % 2 === 0 ? (sum += num) : num));
  return sum;
}

console.log(sumarPares([1]));
