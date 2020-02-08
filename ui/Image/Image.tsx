import React from 'react';

interface Props {
  src: string;
}

const Image = ({src}: Props) => <img src={src} />;

export default Image;
