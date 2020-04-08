import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import Page from 'components/Page';
import CategoryLayout from 'components/CategoryLayout';
import ACCESSORIES_QUERY from 'graphql/AccessoriesQuery';
import sv from 'assets/lang/sv';

const Accessories = () => {
  const {data} = useQuery(ACCESSORIES_QUERY);
  const accessories = data?.accessories;
  console.log('data', data);
  return (
    <Page head={{title: sv.accessories.title}}>
      {accessories ? <CategoryLayout items={accessories} /> : null}
    </Page>
  );
};

export default Accessories;
