function solution(answers) {
    const won = [1, 2, 3, 4, 5]; 
    const to = [2, 1, 2, 3, 2, 4, 2, 5]; 
    const sseul = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const result = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === won[i % won.length]) result[0]++;
        if (answers[i] === to[i % to.length]) result[1]++;
        if (answers[i] === sseul[i % sseul.length]) result[2]++;
    }

    const max = Math.max(...result);
    return result
        .map((count, index) => (count === max ? index + 1 : null))
        .filter(num => num !== null);
}
