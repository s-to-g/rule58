import React from 'react';
import {useQuery} from '@apollo/react-hooks';

import Page from 'components/Page';
import CategoryLayout from 'components/CategoryLayout';
import PageHeader from 'components/PageHeader';
import ACCESSORIES_QUERY from 'graphql/AccessoriesQuery';
import headerImage from 'assets/images/RULE58_STORE_106.jpg';
import sv from 'assets/lang/sv';

const Accessories = () => {
  const {data} = useQuery(ACCESSORIES_QUERY);
  const accessories = data?.accessories;
  return (
    <Page head={{title: sv.accessories.title}}>
      <PageHeader
        imgUrl={headerImage}
        title={sv.accessories.title}
        desc={sv.accessories.desc}
      />
      {accessories ? <CategoryLayout items={accessories} /> : null}
    </Page>
  );
};

export default Accessories;
