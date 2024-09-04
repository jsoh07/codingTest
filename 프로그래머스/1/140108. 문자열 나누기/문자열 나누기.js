function solution(s) {
    let count = 0;
    let i = 0;
    while(i < s.length) {
        let x = s[i];
        let sCount = 0;
        let nsCount = 0;
        while(i < s.length){
            if(s[i] === x){
                sCount++;
            }else{
                nsCount++;
            }
            if(sCount === nsCount){
                break;
            }
            i++;
        }
        i++;
        count++;
    }
    
    
    return count;
}