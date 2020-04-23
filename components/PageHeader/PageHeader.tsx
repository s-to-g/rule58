import React from 'react';

import Box from 'ui/Box';
import Text from 'ui/Text';

interface Props {
  imgUrl: string;
  title: string;
  desc: string;
}

const PageHeader = ({imgUrl, title, desc}: Props) => {
  return (
    <Box
      backgroundImage={`url(${imgUrl})`}
      backgroundPosition="center center"
      backgroundSize="cover"
      width="100%"
      height={['300px', '400px']}
    >
      <Box
        backgroundColor="rgba(0, 0, 0 , 0.6)"
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        paddingX="l"
      >
        <Text color="white" fontSize={['l', 'xl']}>
          {title}
        </Text>
        <Box maxWidth="700px" marginX="auto">
          <Text color="white" fontSize={['m', 'l']} textAlign="center">
            {desc}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PageHeader;
