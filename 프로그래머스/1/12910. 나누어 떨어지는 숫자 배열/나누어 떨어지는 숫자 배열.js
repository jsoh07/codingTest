function solution(arr, divisor) {
    // divisor로 나누어 떨어지는 요소들 필터링
    const filtered = arr.filter(num => num % divisor === 0);
    
    if (filtered.length === 0) {
        return [-1];
    }

    filtered.sort((a, b) => a - b);
    
    return filtered;
}