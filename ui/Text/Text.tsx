import styled from 'styled-components';
import {
  space,
  color,
  width,
  typography,
  SpaceProps,
  WidthProps,
  TypographyProps,
  ColorProps,
} from 'styled-system';

type TextProps = SpaceProps & TypographyProps & ColorProps & WidthProps;

const Text = styled.p<TextProps>`
  ${space}
  ${color}
  ${typography}
  ${width}
`;

export default Text;
