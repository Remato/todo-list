import styled from 'styled-components/native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

type Props = {
  isFocus: boolean
}

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
`

export const Button = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  margin-left: 4px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.PRODUCT.BLUE_DARK};
`

export const ButtonText = styled.Text``

export const PlusIcon = styled(Icon).attrs((props) => ({
  size: 16,
  color: props.theme.COLORS.BASE.GRAY_100,
}))``

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.COLORS.BASE.GRAY_300,
}))<Props>`
  flex: 1;
  height: 54px;
  font-size: 16px;
  padding-horizontal: 16px;
  border-radius: 6px;
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  border: 1px solid
    ${({ isFocus, theme }) =>
      isFocus ? theme.COLORS.PRODUCT.PURPLE_DARK : theme.COLORS.BASE.GRAY_700};
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_500};
`
