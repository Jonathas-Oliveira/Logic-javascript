/*8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]*/
function Removing(array){
    return array.reduce((reducer, value) => reducer.concat(value), []);
}
console.log(Removing([1, 2, [3], [4, 5]]))