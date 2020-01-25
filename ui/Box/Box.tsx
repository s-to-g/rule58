import styled from 'styled-components'
import {
  space,
  width,
  layout,
  position,
  color,
  flexbox,
  border,
  borderRadius,
  ColorProps,
  FlexboxProps,
  BorderProps,
  BorderRadiusProps,
  LayoutProps,
  SpaceProps,
  WidthProps,
  PositionProps,
} from 'styled-system'

type BoxProps = ColorProps &
  FlexboxProps &
  BorderProps &
  BorderRadiusProps &
  LayoutProps &
  SpaceProps &
  WidthProps &
  PositionProps

const Box = styled.div<BoxProps>`
  ${color}
  ${space}
  ${layout}
  ${width}
  ${position}
  ${flexbox}
  ${border}
  ${borderRadius}
`

export default Box
