function solution(k, score) {
    let answer = [];
    let scoreMap = [];
    
    for(let i = 0; i < score.length; i++){
        scoreMap.push(score[i]);
        scoreMap.sort((a,b) => b - a);
        if(scoreMap.length > k){
            scoreMap.pop();
        }
        
        answer.push(scoreMap[scoreMap.length - 1]);
    }
    
    return answer;
}