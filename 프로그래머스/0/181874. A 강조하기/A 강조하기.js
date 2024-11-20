function solution(myString) {
    return myString.split('').map(char => {
        if(char === 'a')
            return 'A'
        else if(char === 'A')
            return 'A'
        else if(char >= 'A' && char <= 'Z')
            return char.toLowerCase();
        else return char;
    }).join('');
}