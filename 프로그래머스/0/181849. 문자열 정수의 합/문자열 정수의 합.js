function solution(num_str) {
    return num_str.split('').reduce((sum, num) => sum + parseInt(num), 0);
}