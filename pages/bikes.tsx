import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import Page from 'components/Page';
import Box from 'ui/Box';
import Text from 'ui/Text';
import CategoryLayout from 'components/CategoryLayout';
import BIKES_QUERY from 'graphql/BikesQuery';
import bikesImage from 'assets/images/RULE58_STORE_022.jpg';
import sv from 'assets/lang/sv';

const Bikes = () => {
  const {data} = useQuery(BIKES_QUERY);
  const bikes = data?.bikes;
  return (
    <Page head={{title: sv.bikes.title}}>
      <Box
        backgroundImage={`url(${bikesImage})`}
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
            {sv.bikes.title}
          </Text>
          <Box maxWidth="700px" marginX="auto">
            <Text color="white" fontSize={['m', 'l']} textAlign="center">
              {sv.bikes.desc}
            </Text>
          </Box>
        </Box>
      </Box>
      {<CategoryLayout items={bikes} />}
    </Page>
  );
};

export default Bikes;
