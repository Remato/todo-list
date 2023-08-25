import { useState } from 'react'
import uuid from 'react-native-uuid'
import { StatusBar } from 'react-native'
import logo from '../../assets/logo.png'
import { TopWrapper, BottomWrapper } from './styles'
import { Logo, TextInput, Dashboard, TodoList } from '../../components'

type Props = {
  total: number
  todoList: Todo[]
  finished: number
  addTodo(todo: Todo): void
}

export function Home({ total, finished, todoList, addTodo }: Props) {
  const [todo, setTodo] = useState('')

  const onPressAdd = () => {
    if (todo !== '') {
      const id = uuid.v4() as string
      addTodo({ id, name: todo, finished: false })
      setTodo('')
    }
  }

  return (
    <>
      <TopWrapper>
        <Logo image={logo} alt="logo" />
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <TextInput
          value={todo}
          onPress={onPressAdd}
          onChangeText={setTodo}
          placeholder="Adicione uma tarefa"
        />
        <Dashboard createdNumber={total} finishedNumber={finished} />
      </TopWrapper>
      <BottomWrapper>
        <TodoList tasks={todoList} />
      </BottomWrapper>
    </>
  )
}
