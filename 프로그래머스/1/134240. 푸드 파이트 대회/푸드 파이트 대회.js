function solution(food) {
    let left = '';
    let right = '';
    
    for(i = 1; i < food.length; i++ ){
        if(food[i] / 2 !== 0){
            left += i.toString().repeat(food[i] / 2);
            right = i.toString().repeat(food[i] / 2) + right;
        }
    }
    return left + '0' + right;
}