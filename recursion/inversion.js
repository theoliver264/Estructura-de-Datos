function inversion(n,m,x){
    if (n == 0) return m
    else return (1+x) * inversion(n-1, m,x)
}