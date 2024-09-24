function solution(s) {
    const sMap = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];
    let resultArr = '';
    for(let i = 0; i < sMap.length; i++){
        resultArr = s.split(sMap[i]);
        s = resultArr.join(i);
    }
    
    return parseInt(s);
}