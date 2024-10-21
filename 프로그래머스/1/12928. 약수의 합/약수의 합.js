function solution(n) {
    let sum = 0;
    let div = 1;
    
    while(div <= n){
        if(n % div === 0){
            sum+=div;    
        }
        div++;
    }
    
    return sum;
}