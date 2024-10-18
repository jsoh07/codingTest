function solution(n, m) {
    let answer = [];
    const gcd = (a,b) => {
        while(b !== 0){
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    const lcm = (a,b) => {
        return (a * b) / gcd(a,b);
    }
    return [gcd(n,m), lcm(n,m)];
}