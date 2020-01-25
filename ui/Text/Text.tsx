import styled from 'styled-components'
import {
  space,
  color,
  typography,
  SpaceProps,
  TypographyProps,
  ColorProps,
} from 'styled-system'

type TextProps = SpaceProps & TypographyProps & ColorProps

const Text = styled.p<TextProps>`
  ${space}
  ${color}
  ${typography}
`

export default Text
