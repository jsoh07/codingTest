function solution(X, Y) {
    let countX = {};
    let countY = {};
    
    for(let char of X){
        countX[char] = (countX[char] || 0) + 1;
    }
    for(let char of Y){
        countY[char] = (countY[char] || 0) + 1;
    }
    
    let commonNum = [];
    
    for(let num in countX){
        if(countY[num]){
            let minNum = Math.min(countX[num], countY[num]);
            
            for(let i = 0; i < minNum; i++){
                commonNum.push(num);
            }
        }
    }
    
    if(commonNum.length === 0){
        return '-1';
    }
    
    commonNum.sort((a,b) => b - a);
    
    if(commonNum[0] === '0'){
        return '0';
    }
    
    

    return commonNum.join('');
}