import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import Page from 'components/Page';
import CategoryLayout from 'components/CategoryLayout';
import APPARELS_QUERY from 'graphql/ApparelsQuery';
import sv from 'assets/lang/sv';

const Apparel = () => {
  const {data} = useQuery(APPARELS_QUERY);
  const apparels = data?.apparels;
  return (
    <Page head={{title: sv.apparel.title}}>
      {apparels ? <CategoryLayout items={apparels} /> : null}
    </Page>
  );
};

export default Apparel;
