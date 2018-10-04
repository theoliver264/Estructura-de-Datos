/* 
dulces  bebidas   conservas
0       1         2
*/  
let costos = []
for(let i = 0;i< 3; i++) {
    costos[i] = new Array(12)
}

for(let j = 0; j < 12; j ++){
    for(let i = 0; i < 3; i++){
        costos[i][j] = Math.floor(Math.random() * 100)+1 
    }
}

function mayor(arr){
    let i = arr.indexOf(Math.max(...arr));
    return retMonth(i+1)
}

function menor(arr){
    let i = arr.indexOf(Math.min(...arr));
    return retMonth(i+1)
}

function average(x){
    let res = 0
    for(let i = 0; i < x.length; i++) res += x[i]
    return res /= x.length
}

function menorDic(x){
    let temp = [x[0][11],x[1][11],x[2][11]]
    let i = temp.indexOf(Math.min(...temp));
    switch(i){
        case 0:
            return "dulces"
        case 1: 
            return "bebidas"
        case 2:
            return "conservas"
    }
}

function retMonth(x){
    switch (x) {
        case 1:
            return "Enero"
        case 2:
            return "Febrero"
        case 3:
            return "Marzo"       
        case 4:
            return "Abril"
        case 5:
            return "Mayo"
        case 6:
            return "Junio"
        case 7:
            return "Julio"
        case 8:
            return "Agosto"
        case 9:
            return "Septiembre"
        case 10:
            return "Octubre"
        case 11:
            return "Noviembre"
        case 12:
            return "Diciembre"
    }
}