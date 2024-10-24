function solution(s) {
    return s.split('').sort((a, b) => {
        // 비교 함수에서 a < b일 때 1을 반환하여 a가 뒤로 가게 하고,
        // a > b일 때 -1을 반환하여 a가 앞으로 가도록 설정
        return a < b ? 1 : a > b ? -1 : 0;
    }).join('');
}