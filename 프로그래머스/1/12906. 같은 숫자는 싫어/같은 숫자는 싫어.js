function solution(arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (newArr.length === 0 || arr[i] !== newArr[newArr.length - 1]) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}
