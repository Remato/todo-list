import styled, { DefaultTheme } from 'styled-components/native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

type Props = {
  checked?: boolean
} & DefaultTheme

const getColor = ({ checked, theme }: Props) => {
  return checked ? theme.COLORS.PRODUCT.PURPLE : theme.COLORS.PRODUCT.BLUE
}

const getFontColor = ({ checked, theme }: Props) => {
  return checked ? theme.COLORS.BASE.GRAY_300 : theme.COLORS.BASE.GRAY_100
}

export const Wrapper = styled.View`
  width: 100%;
  height: 64px;
  margin-bottom: 8px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid ${({ theme }) => theme.COLORS.BASE.GRAY_400};
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_500};
`

export const LeftIconWrapper = styled.View``

export const LeftIcon = styled(Icon).attrs((props: Props) => ({
  size: 24,
  color: getColor(props),
}))<Props>``

export const RightIconWrapper = styled.View``

export const RightIcon = styled(Icon).attrs((props) => ({
  size: 24,
  color: props.theme.COLORS.BASE.GRAY_300,
}))``

export const Text = styled.Text<Props>`
  width: 235px;
  font-size: 14px;
  line-height: 20px;
  color: ${getFontColor};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
`
