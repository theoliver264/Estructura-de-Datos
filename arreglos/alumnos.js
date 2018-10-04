function crearArreglo(x){
    return Array.from({length: x}, () => Math.floor(Math.random() * 10)+1);
}
function average(x){
    let res = 0
    for(let i = 0; i < x.length; i++) res += x[i]
    return res /= x.length
}

function aproved(x){
    let res = 0
    for(let i = 0; i < x.length; i++){
        if(x[i] >= 6){
            res++
        }
    }
    return res +" aprobados"
}

function failed(x){
    let res = 0
    for(let i = 0; i < x.length; i++){
        if(x[i] < 6){
            res++
        }
    }
    return res +" reprobados"
}

function failedPerCent(x){
    let res = 0
    for(let i = 0; i < x.length; i++){
        if(x[i] < 6){
            res++
        }
    }
    return ((res / x.length) * 100) +"% reprobados"
}

function aprovedPerCent(x){
    let res = 0
    for(let i = 0; i < x.length; i++){
        if(x[i] >= 6){
            res++
        }
    }
    return ((res / x.length) * 100) +"% aprobados"
}

function over8(x){
    let res = 0
    for(let i = 0; i < x.length; i++){
        if(x[i] >= 8){
            res++
        }
    }
    return res
}