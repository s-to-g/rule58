import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import Page from 'ui/Page';
import Box from 'ui/Box';
import Text from 'ui/Text';
import Image from 'ui/Image';
import APPARELS_QUERY from 'graphql/ApparelsQuery';

const Apparel = () => {
  const {data} = useQuery(APPARELS_QUERY);
  const apparels = data?.apparels;
  console.log('data', data);
  return (
    <Page head={{title: 'Kläder, skor och hjälmar'}}>
      {apparels ? (
        <Box flexDirection="row">
          {apparels.map((apparel: any) => (
            <Box key={apparel.id} width={[1 / 3]}>
              <Image src={apparel.picture.url} alt={apparel.brand} />
              <Text>{apparel.brand}</Text>
            </Box>
          ))}
        </Box>
      ) : null}
    </Page>
  );
};

export default Apparel;
