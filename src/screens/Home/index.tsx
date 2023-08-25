import useTodo from '../../stores/todo.store'
import { Home } from './Home'

export default function HomeContainer() {
  const { todos, newTodo, totalTodos, finishedTodos } = useTodo()
  return (
    <Home
      todoList={todos}
      addTodo={newTodo}
      total={totalTodos()}
      finished={finishedTodos()}
    />
  )
}
