function solution(s){
    s = s.toLowerCase();

    // 정규표현식을 사용해 갯수 파악
    const pCount = (s.match(/p/g) || []).length;
    const yCount = (s.match(/y/g) || []).length;

    return pCount === yCount;
}