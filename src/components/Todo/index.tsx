import { useState } from 'react'
import {
  Text,
  Wrapper,
  LeftIcon,
  RightIcon,
  LeftIconWrapper,
  RightIconWrapper,
} from './styles'
import useTodo from '../../stores/todo.store'
import { Alert } from 'react-native'

type Props = {
  todo: Todo
}

export default function Todo({ todo }: Props) {
  const { id, name, finished } = todo
  const { checkedTodo, deleteTodo } = useTodo()
  const [checked, setChecked] = useState(finished)

  const getIconName = () =>
    checked ? 'check-circle' : 'checkbox-blank-circle-outline'

  const handlePressCheck = () => {
    checkedTodo(id)
    setChecked((prevState) => !prevState)
  }

  const handlePressTrash = () => {
    Alert.alert('Remover', `Remover a tarefa "${name}"?`, [
      {
        text: 'Sim',
        onPress: () => deleteTodo(id),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <Wrapper>
      <LeftIconWrapper>
        <LeftIcon
          checked={checked}
          name={getIconName()}
          onPress={handlePressCheck}
        />
      </LeftIconWrapper>

      <Text checked={checked}>{name}</Text>

      <RightIconWrapper>
        <RightIcon name="trash-can-outline" onPress={handlePressTrash} />
      </RightIconWrapper>
    </Wrapper>
  )
}
