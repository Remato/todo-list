import Todo from '../Todo'
import { Wrapper, List } from './styles'

type Props = {
  tasks: Todo[]
}

export default function TodoList({ tasks }: Props) {
  return (
    <Wrapper>
      <List
        data={tasks}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const todo = item as Todo
          return <Todo key={todo.id} todo={todo} />
        }}
      />
    </Wrapper>
  )
}
