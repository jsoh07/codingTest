function solution(n) {
    let answer = 0;
    
    for(let i = 0; i < 500; i++){
        if(n !== 1){
            n = n % 2 === 0 ? n / 2 : n * 3 + 1;
        }else if(n === 1){
            return answer = i;
        }
    }
    return answer = -1;
}