function Binario(n){
    var bin=[];
    while(n>0){
        res= n%2;
        div = Math.floor(n/2);
        n=div;
        bin.push(res);
    }
    num=Number(bin.join(""));
    return num;
}