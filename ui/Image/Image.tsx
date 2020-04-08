import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;
}

const StyledImage = styled.img`
  width: 100%;
`;

const Image = ({src, alt}: Props) => <StyledImage src={src} alt={alt} />;

export default Image;
