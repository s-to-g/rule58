import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
  alt?: string;
  fullHeight?: boolean;
}

interface StyledImageProps {
  fullHeight?: boolean;
}
const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  ${(props) => props.fullHeight && 'height: 100%;'}
`;

const Image = ({src, alt}: Props) => <StyledImage src={src} alt={alt} />;

export default Image;
