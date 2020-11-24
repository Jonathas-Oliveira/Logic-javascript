function remover(array,a,b){

var resultado = array.filter(function(item) {
  return item !== a &&  item !== b;
})
return resultado
}

console.log(remover([5,4,3,2,5], 5,3))