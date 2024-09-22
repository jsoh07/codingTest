function solution(numbers) {
    let number = 0;
    
    for(let i = 0; i < 10; i++){
        if(!numbers.includes(i)){
            number+= i;
        }
    }

    return number;
}