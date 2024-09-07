function solution(number, limit, power) {
    function divNumber(n){
        let count = 0;
        for(let i = 1; i <= Math.sqrt(n); i++){
            if(n % i === 0){
                count+= (i * i === n) ? 1 : 2;
            } 
        }
        return count;
    }
    
    let result = 0;
    
    for(let i = 1; i <= number; i++){
        let divider = divNumber(i);
        let weaponPower = divider > limit ? power : divider;
        
        result += weaponPower;
    }
    
    
    // 1부터 5까지의 약수 갯수를 먼저 구하고
    // 3을 초과한 수는 2로 변경
    // 후 모든 수를 더한 값을 결과로 리턴
    return result;
}