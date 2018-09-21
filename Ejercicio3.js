function Fibonacci(n){
    var a=0;
    var b=1;
    var t;
    for(let i=0;i<n-1;i++){
        t=a+b;
        b=a;
        a=t;
    }
    return a;
}






