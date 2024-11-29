function solution(todo_list, finished) {
    
    return todo_list.filter((i,index) => !finished[index]);
}