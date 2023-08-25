import { ImageSourcePropType } from 'react-native'
import { Wrapper, Image } from './styles'

type Props = {
  alt?: string
  image: ImageSourcePropType
}

export default function Logo({ image, alt = '' }: Props) {
  return (
    <Wrapper>
      <Image source={image} alt={alt} />
    </Wrapper>
  )
}
