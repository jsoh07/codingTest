function solution(a, b) {
    const sA = String(a);
    const sB = String(b);
    const sumS = sA + sB;
    const mul = 2 * a * b;
    if(sumS > mul) return Number(sumS);
    else if(sumS < mul) return mul;
    else return Number(sumS);

}