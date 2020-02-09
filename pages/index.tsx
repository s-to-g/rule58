import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import BIKES_QUERY from 'graphql/BikesQuery';
import Box from 'ui/Box';
import Text from 'ui/Text';
import Page from 'ui/Page';

const Home = () => {
  const {data, loading, error} = useQuery(BIKES_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <Page head={{title: 'Cyklar, kläder och tillbehör'}}>
      <Box display="block">
        <ul>
          {data.bikes &&
            data.bikes.map((bike: any) => {
              return (
                <li key={`bike__${bike.id}`}>
                  <Text>{bike.brand}</Text>
                </li>
              );
            })}
        </ul>
      </Box>
    </Page>
  );
};

export default Home;
