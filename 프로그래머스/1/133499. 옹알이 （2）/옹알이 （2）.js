function solution(babbling) {
    const canTalk = ["aya", "ye", "woo", "ma"];
    let result = 0;
    
    babbling.forEach(word => {
        let lastTalk = '';
        let isValid = true;
    
        while(word.length > 0){
            let matched = false;
            for(let talk of canTalk){
                if(word.startsWith(talk)){
                    if(talk === lastTalk){
                        isValid = false;
                        break;
                    }       
                    word = word.slice(talk.length);
                    lastTalk = talk;
                    matched = true;
                    break;
                }
                
                
            }
            if(!matched){
                    isValid = false;
                    break;
                }
            
            
        }
        if(isValid){
                result++;
            }
    });
    
    
    return result;
}