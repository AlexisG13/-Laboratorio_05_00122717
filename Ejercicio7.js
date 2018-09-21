function EsBisiesto(n){
    if(((n%4==0)&&(n%100!==0))||(n%400==0)){
        console.log("Es bisiesto");
    }
    else{
        console.log("No es bisiesto");
    }
}