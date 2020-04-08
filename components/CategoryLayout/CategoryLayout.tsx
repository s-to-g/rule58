import React from 'react';

import Box from 'ui/Box';
import Text from 'ui/Text';
import Image from 'ui/Image';
import {getMaxwidth} from 'config/theme';

const CategoryLayout = ({items}: {items: any}) => {
  const maxWidth = getMaxwidth();
  return (
    <Box display="block">
      {items
        ? items.map((item: any, index: any) => (
            <Box
              key={item.id}
              width="100%"
              backgroundColor={index % 2 === 0 ? 'white' : 'greyLight'}
              paddingTop={[0, 'xxl', 'xxxl']}
              paddingBottom={['xl', 'xxl', 'xxxl']}
              paddingX={[0, 'm']}
            >
              <Box flexDirection="column" maxWidth={maxWidth} marginX="auto">
                <Box maxWidth="700px" minHeight="100px" marginX="auto">
                  <Image src={item.picture.url} alt="test" />
                </Box>
                <Box
                  paddingX={['l', 'l', 'xl']}
                  width="100%"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Box paddingTop="m" paddingBottom="s" justifyContent="center">
                    <Text fontSize={['xl', 'xxl']} fontWeight="bold">
                      {item.brand}
                    </Text>
                  </Box>
                  <Text fontSize={['m', 'xl']}>{item.description}</Text>
                </Box>
              </Box>
            </Box>
          ))
        : null}
    </Box>
  );
};

export default CategoryLayout;
