function InverterArray(array){
    const inverso = array.map(function (item, indice, array){
        return array[array.length - indice - 1];
      });
    return console.log(inverso)
}
InverterArray([1,2,3,4,5,6,7])