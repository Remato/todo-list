declare interface TodoStore {
  todos: Todo[]
  totalTodos(): number
  finishedTodos(): number
  newTodo(todo: Todo): void
  checkedTodo(id: string): void
  deleteTodo(todoId: string): void
}
