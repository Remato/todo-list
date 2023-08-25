import styled from 'styled-components/native'

export const TopWrapper = styled.View`
  z-index: 2;
  height: 173px;
  padding-horizontal: 24px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_700};
`

export const BottomWrapper = styled.View`
  flex: 1;
  padding-horizontal: 24px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_600};
`
