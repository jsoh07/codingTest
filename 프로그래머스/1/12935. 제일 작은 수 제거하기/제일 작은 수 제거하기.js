function solution(arr) {
    let answer = [];
    
    if(arr.length === 1){
        answer.push(-1);
    }else{
        let min = Math.min(...arr);
        answer = arr.filter(rm => rm !== min);
    }    
    return answer;
}