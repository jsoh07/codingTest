function solution(strArr) {
    
    return strArr.map((num, i) => i % 2 === 0 ? num.toLowerCase() : num.toUpperCase());
}