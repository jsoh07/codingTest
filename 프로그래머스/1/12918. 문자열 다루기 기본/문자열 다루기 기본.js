function solution(s) {
    let answer = true;
    const sL = s.length;
    const num = /^\d+$/.test(s);
    
    if((sL === 4 || sL === 6) && num) return answer;
    else return !answer;    
}