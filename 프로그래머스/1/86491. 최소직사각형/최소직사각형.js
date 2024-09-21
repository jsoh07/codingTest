function solution(sizes) {
   let card = sizes.map(size => size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]]);

    const width = [];
    const height = [];
    
    for(let i = 0; i < card.length; i++){
        width.push(card[i][0]);
        height.push(card[i][1]);
    }
    
    return Math.max(...width) * Math.max(...height);
}