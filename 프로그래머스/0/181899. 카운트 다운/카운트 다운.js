function solution(start_num, end_num) {
    let numMap = [];
    for(let i = start_num; i >= end_num; i--){
        numMap.push(i);
    }
    return numMap;
}