function solution(arr1, arr2) {
    const rows = arr1.length;
    const cols = arr1[0].length;
    const result = Array.from({length: rows}, () => Array(cols).fill(0));
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            result[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    
    return result;
}