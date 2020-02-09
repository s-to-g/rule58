import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import Page from 'ui/Page';
import Box from 'ui/Box';
import Text from 'ui/Text';
import ACCESSORIES_QUERY from 'graphql/AccessoriesQuery';

const Accessories = () => {
  const {data} = useQuery(ACCESSORIES_QUERY);
  const accessories = data?.accessories;
  console.log('data', data);
  return (
    <Page head={{title: 'Tillbehör'}}>
      {accessories ? (
        <Box>
          {accessories.map((accessory: any) => (
            <Text key={accessory.id}>{accessory.brand}</Text>
          ))}
        </Box>
      ) : null}
    </Page>
  );
};

export default Accessories;
