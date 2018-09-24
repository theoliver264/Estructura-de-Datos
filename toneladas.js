let tons = crearArreglo(12)
function crearArreglo(x){
    return Array.from({length: x}, () => Math.floor(Math.random() * 10)+1);
}
function average(x){
    let res = 0
    for(let i = 0; i < x.length; i++) res += x[i]
    return res /= x.length
}

function higher(x){
    let res = 0
    for(let i = 0; i < x.length; i++){
        if(x[i] > average(x)){
            res++
        }
    }
    return res
}

function lower(x){
    let res = 0
    for(let i = 0; i < x.length; i++){
        if(x[i] < average(x)){
            res++
        }
    }
    return res
}