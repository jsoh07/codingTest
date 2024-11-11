function solution(n, arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < n; i++){
        let row = arr1[i] | arr2[i];
        let rowNum = row.toString(2).padStart(n, '0');
        
        let deRow = rowNum.split('').map(bit => (bit === '1' ? '#' : ' ')).join('');
    
        answer.push(deRow);
    }
    
    return answer;
}