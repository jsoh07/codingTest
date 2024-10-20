function solution(s) {
    
    let word  = s.split(' ');
    const nW = word.map((w) => {
        let answer = '';
        for(let i = 0; i < w.length; i++){
            if(i % 2 === 0){
                answer += w[i].toUpperCase();    
            }
            if(i % 2 !== 0){
                answer += w[i].toLowerCase();    
            }
        }
        return answer;
    });
    
    return nW.join(' ');
}