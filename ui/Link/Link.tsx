import React from 'react';
import styled from 'styled-components';

import {getColor} from 'config/theme';

const StyledLink = styled.a`
  color: ${getColor('black')};
  text-decoration: none;
  display: inline-block;
  line-height: 100%;
`;

interface Props {
  children: React.ReactNode;
  href?: string;
  rel?: string;
  target?: string;
  onClick?: () => void;
}

const Link = React.forwardRef((props: Props, ref: any) => (
  <StyledLink onClick={props.onClick} ref={ref} {...props}>
    {props.children}
  </StyledLink>
));

export default Link;
