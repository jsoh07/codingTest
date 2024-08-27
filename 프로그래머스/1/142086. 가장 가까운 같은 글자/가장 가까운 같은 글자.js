function solution(s) {
    const sMap = {};
    const result = [];
    for(i = 0; i < s.length; i++){
        const char = s[i]
        if(char in sMap){
            result[i] = i - sMap[char];
        }else{
            result[i] = -1;
        }
        sMap[char] = i;
    }
    return result;
}