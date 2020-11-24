function RemovingDuplicated(array){
    var novaArr = array.filter((este, i) => array.indexOf(este) === i);
    console.log(novaArr)
}
RemovingDuplicated([1,2,3,3,2,4,5,4,7,3])