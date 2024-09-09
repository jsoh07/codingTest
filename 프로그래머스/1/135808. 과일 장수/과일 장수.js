function solution(k, m, score) {
    let result = 0;
      
    score.sort((a,b) => b-a);
        
    for(i = 1; i <= score.length / m; i++){
      result += m * score[m * i -1];
    }
    
    return result;
}