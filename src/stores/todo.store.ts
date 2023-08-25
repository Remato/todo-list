import { create } from 'zustand'

const useTodo = create<TodoStore>((set, get) => ({
  todos: [] as Todo[],
  totalTodos: () => {
    return get().todos.length
  },
  finishedTodos: () => {
    let sum = 0
    get().todos.forEach(({ finished }) => {
      if (finished) sum++
    })
    return sum
  },
  newTodo: (todo: Todo) => {
    set((prevState) => ({
      todos: [...prevState.todos, todo],
    }))
  },
  deleteTodo: (todoId: string) => {
    const newTodos = get().todos.filter(({ id }) => id !== todoId)
    set(() => ({ todos: newTodos }))
  },
  checkedTodo: (todoId: string) => {
    const todoIndex = get().todos.findIndex(({ id }) => id === todoId)
    const newTodos = get().todos
    newTodos[todoIndex].finished = !newTodos[todoIndex].finished
    set(() => ({ todos: newTodos }))
  },
}))

export default useTodo
