function solution(numbers) {
    let num = [];
    
    for(let i = 0; i < numbers.length; i++){
        for(let l = i + 1; l < numbers.length; l++){
            let sum = numbers[i] + numbers[l];
                if(!num.includes(sum)) {
                    num.push(sum);   
                }
        }
    }
    return num.sort(function(a,b){ 
            return a-b;
    });
}