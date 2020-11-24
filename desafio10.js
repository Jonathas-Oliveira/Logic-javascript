/*10) Implemente um método que encontre os valores comuns entre dois arrays.
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]*/

function Equal(array1,array2){
    return  array1 = array1.filter(item => !!array2.includes(item))
   
}

console.log(Equal([6, 8], [8, 9]))