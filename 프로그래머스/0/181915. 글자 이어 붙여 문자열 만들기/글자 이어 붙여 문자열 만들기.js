function solution(my_string, index_list) {
    let result = '';
    for(let i = 0; i < index_list.length; i++){
        result+=my_string[index_list[i]];
    }
    return result;

    // 더 간단한 풀이
    // return index_list.map(x => my_string[x]).join('');
}
