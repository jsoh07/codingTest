function solution(n) {
    let samJin = '';
    
    while(n > 0){
        samJin = n % 3 + samJin;
        n = Math.floor(n / 3);
    }
    
    return parseInt(samJin.split("").reverse().join(""), 3);
}