function solution(nums) {
    const answer = nums.filter((e, i) => { 
        return nums.indexOf(e) === i;
    });
    let limit = nums.length / 2;
    
    return answer.length > limit ? limit : answer.length;
}