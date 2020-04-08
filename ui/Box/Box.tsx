import styled from 'styled-components';
import {
  space,
  width,
  layout,
  position,
  color,
  flexbox,
  border,
  borderRadius,
  background,
  ColorProps,
  FlexboxProps,
  BorderProps,
  BorderRadiusProps,
  LayoutProps,
  SpaceProps,
  WidthProps,
  PositionProps,
  BackgroundProps,
} from 'styled-system';

type BoxProps = ColorProps &
  FlexboxProps &
  BorderProps &
  BorderRadiusProps &
  LayoutProps &
  SpaceProps &
  WidthProps &
  BackgroundProps &
  PositionProps;

const Box = styled.div<BoxProps>`
  ${color}
  ${space}
  ${layout}
  ${width}
  ${position}
  ${flexbox}
  ${border}
  ${borderRadius}
  ${background}
`;

Box.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
};

export default Box;
