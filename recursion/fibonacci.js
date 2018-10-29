function fibonacci(n){
    if(n <= 2)
       return [0, 1].slice(0, n);
    const res = fibonacci(n - 1);
    res.push(res[res.length - 1] + res[res.length - 2])
    return res;
  }