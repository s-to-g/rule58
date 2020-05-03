import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import Page from 'components/Page';
import CategoryLayout from 'components/CategoryLayout';
import PageHeader from 'components/PageHeader';
import APPARELS_QUERY from 'graphql/ApparelsQuery';
import headerImage from 'assets/images/RULE58_STORE_059.jpg';
import sv from 'assets/lang/sv';

const Apparel = () => {
  const {data} = useQuery(APPARELS_QUERY);
  const apparels = data?.apparels;
  return (
    <Page head={{title: sv.apparel.title}}>
      <PageHeader
        imgUrl={headerImage}
        title={sv.apparel.title}
        desc={sv.apparel.desc}
      />
      {apparels ? <CategoryLayout items={apparels} /> : null}
    </Page>
  );
};

export default Apparel;
