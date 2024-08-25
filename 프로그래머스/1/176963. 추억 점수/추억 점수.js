function solution(name, yearning, photo) {
        const yearningMap = {};
        for(i = 0; i < name.length; i++){
            yearningMap[name[i]] = yearning[i]
        }
        
        const result = photo.map(s => {
            let score = 0;
            for(const photoName of s){
                if(yearningMap[photoName] !== undefined){
                score+=yearningMap[photoName];
                }
            }
        return score;
        })
		return result;
	}