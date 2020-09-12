interface ITodoListContext{
    todoList:Array<String>;
    addTodoList: (todo: string) => void;
    removeTodoList: (index: number) => void;
}