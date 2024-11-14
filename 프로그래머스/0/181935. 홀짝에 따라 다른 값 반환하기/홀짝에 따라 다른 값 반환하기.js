function solution(n) {
    let sum = 0;
    
    if(n % 2 !== 0){
        while(n > 0){
            sum+= n;
            n--;
            n--;
        }
    }else{
        while(n > 1){
            sum+= (n*n);
            n--;
            n--;
        }
    }
    return sum;
}