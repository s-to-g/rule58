import React from 'react';

import Box from 'ui/Box';
import Text from 'ui/Text';
import Image from 'ui/Image';
import {getMaxwidth} from 'config/theme';
import {getImageRatio, getImageHeightPercentage} from 'utils/imageRatio';

const CategoryLayout = ({items}: {items: any}) => {
  const maxWidth = getMaxwidth();
  return (
    <Box display="block">
      {items
        ? items.map((item: any, index: any) => {
            const {width: imageWidth, height: imageHeight} = item.picture;
            const imageRatio = getImageRatio({
              width: imageWidth,
              height: imageHeight,
            });
            const heightPercentage = getImageHeightPercentage(imageRatio);
            return (
              <Box
                key={item.id}
                width="100%"
                backgroundColor={index % 2 === 0 ? 'white' : 'greyLight'}
                paddingTop={[0, 'xxl', 'xxxl']}
                paddingBottom={['xl', 'xxl', 'xxxl']}
                paddingX={[0, 'm']}
                flexDirection="column"
                maxWidth={maxWidth}
                alignItems="center"
                marginX="auto"
              >
                <Box flexDirection="column" maxWidth="700px" width="100%">
                  <Box
                    maxWidth="700px"
                    backgroundColor={'greyLight'}
                    height="0"
                    paddingBottom={`${heightPercentage}%`}
                    width="100%"
                    position="relative"
                  >
                    <Box
                      position="absolute"
                      top={0}
                      bottom={0}
                      left={0}
                      right={0}
                    >
                      <Image src={item.picture.url} fullHeight />
                    </Box>
                  </Box>
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
                  <Text fontSize={['m', 'l', 'xl']}>{item.description}</Text>
                </Box>
              </Box>
            );
          })
        : null}
    </Box>
  );
};

export default CategoryLayout;
