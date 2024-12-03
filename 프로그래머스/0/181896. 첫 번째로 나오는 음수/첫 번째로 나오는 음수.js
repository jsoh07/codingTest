function solution(num_list) {
    // 음수가 없다면 -1 반환
    return num_list.findIndex(num => num < 0);
}