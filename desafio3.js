function removing(list){
    
    list.splice(list.indexOf(undefined),1)
    list.splice(list.indexOf(false),1)
    list.splice(list.indexOf(0),1)
    list.splice(list.indexOf(''),1)

    return list
}

console.log(removing([2,'',false,0,undefined]))
