function Transforming (array){
    const array2 = array.reduce((reducer, value) => reducer.concat(value), [])
   const result = Object.assign({}, array2)
    return console.log(result)
}
Transforming([["c",2],["d",4]])