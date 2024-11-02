function solution(participant, completion) {    
    let p = participant.sort();
    let c = completion.sort();
    let answer = '';
    for(let i = 0; i < p.length; i++){
        if(p[i] !== c[i]) return answer+= p[i];
    }
    
}