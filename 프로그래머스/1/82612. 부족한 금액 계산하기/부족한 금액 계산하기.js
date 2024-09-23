function solution(price, money, count) {
    let cash = 0;
    
    for(let i = 1; i <= count; i++){
        cash+= (price * i)
    }

    return (money - cash) > 0 ? 0 : Math.abs(money - cash);
}