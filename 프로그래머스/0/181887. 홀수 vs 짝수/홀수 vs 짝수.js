function solution(num_list) {
    let odd = num_list.filter((i, index) => index % 2 !== 0).reduce((i,curr) => i + curr,0);    
    let even = num_list.filter((i, index) => index % 2 === 0).reduce((i,curr) => i + curr,0);    
    return odd > even ? odd : even;
}