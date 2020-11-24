/*9) Implemente um método divida um array por uma quantidade passada por parâmetro.
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]*/
function Divisor (array,qtd){
    var resultado = [];
        
        for (var i = 0; i < array.length; i+= qtd){
            resultado.push(array.slice(i,i+qtd));
        }
                
        return resultado;
}

console.log(Divisor([1, 2, 3, 4, 5], 2))