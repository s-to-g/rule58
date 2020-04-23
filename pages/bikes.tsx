import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import Page from 'components/Page';
import CategoryLayout from 'components/CategoryLayout';
import PageHeader from 'components/PageHeader';
import BIKES_QUERY from 'graphql/BikesQuery';
import headerImage from 'assets/images/RULE58_STORE_022.jpg';
import sv from 'assets/lang/sv';

const Bikes = () => {
  const {data} = useQuery(BIKES_QUERY);
  const bikes = data?.bikes;
  return (
    <Page head={{title: sv.bikes.title}}>
      <PageHeader
        imgUrl={headerImage}
        title={sv.bikes.title}
        desc={sv.bikes.desc}
      />
      <CategoryLayout items={bikes} />
    </Page>
  );
};

export default Bikes;
