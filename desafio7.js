/*) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true*/

function arraysEqual(array1, array2) {

    if (!Array.isArray(array1) || ! Array.isArray(array2) || array1.length !== array2.length)
      return false;

    var result1 = array1.concat().sort();
    var result2 = array2.concat().sort();

    for (var i = 0; i < result1.length; i++) {

        if (result1[i] !== result2[i])
            return false;

    }

    return true;

}

console.log(arraysEqual([1,2,3,4],[1,2,3,4]))