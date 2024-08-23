function solution(players, callings) {
    // 선수 이름과 그 인덱스를 매핑하는 객체 생성
    const playerIndex = {};
    for (let i = 0; i < players.length; i++) {
        playerIndex[players[i]] = i;
    }
    
    // callings 배열을 순회하며 선수 순위를 업데이트
    for (const calledName of callings) {
        const currentIndex = playerIndex[calledName];
        if (currentIndex > 0) { // 선수의 인덱스가 0보다 클 경우에만 앞의 선수와 교환
            const previousIndex = currentIndex - 1;
            const previousName = players[previousIndex];

            // 선수들의 이름과 인덱스 업데이트
            players[currentIndex] = previousName;
            players[previousIndex] = calledName;
            
            // 매핑 업데이트
            playerIndex[calledName] = previousIndex;
            playerIndex[previousName] = currentIndex;
        }
    }
    
    return players;
}