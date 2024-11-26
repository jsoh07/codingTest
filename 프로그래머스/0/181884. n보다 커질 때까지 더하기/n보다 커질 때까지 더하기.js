function solution(numbers, n) {
    let sum = 0;
    return numbers.reduce((acc,curr) => {
        if(acc > n) return acc;
        return acc + curr;
    }, 0);
}