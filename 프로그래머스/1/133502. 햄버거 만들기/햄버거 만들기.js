function solution(ingredient) {
    let stack = [];
    let count = 0;
    
    for(let i = 0; i < ingredient.length; i++){
        stack.push(ingredient[i]);
        
        if(stack.length >= 4){
            if(stack.slice(-4).toString()=== '1,2,3,1'){
                stack.splice(-4,4);
                count++;
            }
        }
    }
    return count;
}