let alumnos = []
for(let i = 0;i< 30; i++) {
    alumnos[i] = new Array(6)
}

for(let j = 0; j < 6; j ++){
    for(let i = 0; i < 30; i++){
        alumnos[i][j] = Math.floor(Math.random() * 7) + 4  
    }
}

function groupAvg(x){
    let sum = 0
    for(let j = 0; j < 6; j ++){
        for(let i = 0; i < 30; i++){
            sum +=x[i][j]
        }
    }
    return "Promedio Grupal: " + (sum / 180)
}

function thirdBest(x){
    let temp = []
    for(let i = 0; i < 30; i++){
        temp[i] = x[i][2]
    }
    return "Alumno " + (temp.indexOf(Math.max(...temp)) + 1)
}

function bigBrain(x){
    let temp1 = []
    let temp2 = []
    for(let i = 0; i < 30; i++){
        temp1[i] = x[i][0]
        temp2[i] = x[i][5]
    }
    let max1 = temp1.indexOf(Math.max(...temp1))
    let max2 = temp2.indexOf(Math.max(...temp2))
    for(let i = 0; i < 30; i++){
        if(x[i][0] == max1 && x[i][5] == max1){
            return "Alumno "+ (i + 1)
        } else if(x[i][0] == max2 && x[i][5] == max2){
            return "Alumno "+ (i + 1)
        }
        else throw "No existe"
    }
}

function lowestGrade(arr,index){
    temp = []
    for(let i = 0; i < 6; i++){
        temp[i] = arr[index-1][i]
    }
    return "Examen "+ (temp.indexOf(Math.min(...temp)) + 1)
}

function highestExam(arr){
    let temp = []
    let avg = [0,0,0,0,0,0]
    for(let i = 0;i< 6; i++) {
        temp[i] = new Array(30)
    }
    for(let j = 0; j < 6; j ++){
        for(let i = 0; i < 30; i++){
            temp[j][i] = arr[i][j]  
        }
    }
    
    for(let i = 0;i< 6; i++) {
        for(let j = 0; j < 30; j ++){
            avg[i] += temp[i][j]
        }
        avg[i] /= 30
    }
    console.log(avg)
    return "Examen "+(avg.indexOf(Math.max(...avg)) + 1)
}