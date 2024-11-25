function solution(a, b) { 
    const sumS = String(a) + String(b);
    const mul = 2 * a * b;
    if(sumS > mul) return Number(sumS);
    else if(sumS < mul) return mul;
    else return Number(sumS);
}
