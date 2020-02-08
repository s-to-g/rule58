import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import Box from 'ui/Box';
import Text from 'ui/Text';
import BIKES_QUERY from 'graphql/BikesQuery';

const Bikes = () => {
  const {data} = useQuery(BIKES_QUERY);
  const bikes = data?.bikes;
  return (
    bikes && (
      <Box>
        {bikes.map((bike: any) => (
          <Text key={bike.id}>{bike.brand}</Text>
        ))}
      </Box>
    )
  );
};

export default Bikes;
