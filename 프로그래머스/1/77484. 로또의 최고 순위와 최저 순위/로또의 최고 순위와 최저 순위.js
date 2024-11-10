function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    
    let min = lottos.filter(v => win_nums.includes(v)).length;
    
    let zero = lottos.filter(v => !v).length;
    
    const max = min + zero;
    
    return [rank[max], rank[min]];
}