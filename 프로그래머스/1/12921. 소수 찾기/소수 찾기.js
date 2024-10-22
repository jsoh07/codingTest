function solution(n) {
  const sosu = new Array(n + 1).fill(true);
    sosu[0] = sosu[1] = false;
    
    // 에라토스테네스의 체 알고리즘을 인터넷에 찾아보고 공부..
    for(let i = 2; i * i <= n; i++){ 
        if(sosu[i]){
            for(let j = i * i; j <= n; j += i){
                sosu[j] = false;
            }
        }
    }
    
    let count = 0;
    for(let i = 2; i <= n; i++){
        if(sosu[i]) count++;
    }
  return count;
}