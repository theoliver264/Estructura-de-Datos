let n = Math.floor(Math.random()*10)+1
let m = Math.floor(Math.random()*20)+1
let A = []
let B = []
let C = []

for(var i=0; i<m; i++) {
    A[i] = new Array(n);
    B[i] = new Array(n);
    C[i] = new Array(n);
}
for(let i=0; i<m;i++){
    for(let j=0;j<n;j++){
        A[i][j] = Math.floor(Math.random()*20)+1
        B[i][j] = Math.floor(Math.random()*20)+1
        C[i][j] = A[i][j] + B[i][j]
    }
}
console.log(A)
console.log(B)
console.log(C)