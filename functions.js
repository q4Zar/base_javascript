
function addition(a, b) {
    return a + b
}
let res = addition(1, 2)
console.log(res)

// ---

function carre(nombre) {
    return nombre * nombre
}
let resCarre = carre(2)
console.log(resCarre)

// ---

let obj = {
    name: 'Damien',
    language: 'Javascript',
}

function addFieldToObj(obj, key, val) {
    obj[key] = val
    obj['year'] = 2021
    return obj
}

let resAdd = addFieldToObj(obj, 'year', 2021)
console.log(resAdd)
// console.log(addFieldToObj(obj, 'year', 2021))

// ---