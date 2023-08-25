import styled from 'styled-components/native'

export const Wrapper = styled.View`
  margin-top: 32px;
  flex-direction: row;
  justify-content: space-between;
`

export const InnerWrapper = styled.View`
  flex-direction: row;
`

export const LeftText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRODUCT.BLUE};
`

export const RightText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRODUCT.PURPLE};
`

export const CounterWrapper = styled.View`
  margin-left: 8px;
  padding: 2px 8px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_400};
`

export const Counter = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
