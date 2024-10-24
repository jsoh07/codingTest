function solution(s){
    // 이렇게 소문자로 통일해서 해도 되고
    s = s.toLowerCase();

    // 정규표현식을 사용해 갯수 파악
    const pCount = (s.match(/p/g) || []).length;
    const yCount = (s.match(/y/g) || []).length;

    return pCount === yCount;
}

function solution(s){

    // 대,소문자 구분없이
    // 정규표현식을 사용해 갯수 파악,
    const pCount = (s.match(/p/gi) || []).length;
    const yCount = (s.match(/y/gi) || []).length;

    return pCount === yCount;
}
