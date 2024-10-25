function solution(a, b) {
    let answer = 0;
    if(a < b){
        for(let i = a; i <= b; i++){
            answer+= i;
        }
        return answer;
    }else if(a > b){
        for(let i = a; i >= b; i--){
            answer+= i;            
        }
        return answer;
    }else if(a === b) return answer = a;
}