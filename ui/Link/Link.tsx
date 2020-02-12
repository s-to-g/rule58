import React from 'react';
import styled from 'styled-components';

import {getColor} from 'config/theme';

const StyledLink = styled.a`
  color: ${getColor('black')};
  text-decoration: none;
  display: inline-block;
`;

interface Props {
  children: React.ReactNode;
}

const Link = React.forwardRef((props: Props, ref: any) => (
  <StyledLink ref={ref} {...props}>
    {props.children}
  </StyledLink>
));

export default Link;
