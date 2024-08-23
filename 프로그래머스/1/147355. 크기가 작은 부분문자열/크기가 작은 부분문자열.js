function solution(t, p) {
    const pLength = p.length;
    const pNumber = Number(p);
    let a = 0;
    
    for(i = 0; i < t.length - pLength + 1; i++){
        const tNum = t.slice(i, pLength + i);
        
        if(tNum <= pNumber)
            a++
    }
    return a;
}