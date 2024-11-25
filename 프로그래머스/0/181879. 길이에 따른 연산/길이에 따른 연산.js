function solution(num_list) {
    const nlLength = num_list.length;
    
    if(nlLength >= 11) return num_list.reduce((a,b) => (a+b));
    if(nlLength <= 10) return num_list.reduce((a,b) => (a*b));
    
}