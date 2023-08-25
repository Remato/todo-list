import {
  Counter,
  Wrapper,
  LeftText,
  RightText,
  InnerWrapper,
  CounterWrapper,
} from './styles'

type Props = {
  createdNumber?: number
  finishedNumber?: number
}

export default function Dashboard({
  createdNumber = 0,
  finishedNumber = 0,
}: Props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <LeftText>Criadas</LeftText>
        <CounterWrapper>
          <Counter>{createdNumber}</Counter>
        </CounterWrapper>
      </InnerWrapper>
      <InnerWrapper>
        <RightText>Concluídas</RightText>
        <CounterWrapper>
          <Counter>{finishedNumber}</Counter>
        </CounterWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}
