import { useState } from 'react'
import { Wrapper, Input, Button, ButtonText, PlusIcon } from './styles'

type Props = {
  value: string
  placeholder: string
  onPress: () => void
  onChangeText: (text: string) => void
}

export default function TextInput({
  value,
  placeholder,
  onPress,
  onChangeText,
}: Props) {
  const [isFocus, setIsFocus] = useState(false)

  const handleFocus = () => setIsFocus(true)

  const handleBlur = () => setIsFocus(false)

  return (
    <Wrapper>
      <Input
        value={value}
        isFocus={isFocus}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      <Button onPress={onPress}>
        <ButtonText>
          <PlusIcon name="plus-circle-outline" />
        </ButtonText>
      </Button>
    </Wrapper>
  )
}
