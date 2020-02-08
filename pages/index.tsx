import React from 'react';
import Link from 'next/link';
import {useQuery} from '@apollo/react-hooks';

import BIKES_QUERY from 'graphql/BikesQuery';
import Box from 'ui/Box';
import Text from 'ui/Text';
import Page from 'ui/Page';

const LINKS = [
  {
    route: 'about',
    url: 'om-oss',
    title: 'Om oss',
  },
  {
    route: 'bikes',
    url: 'cyklar',
    title: 'Cyklar',
  },
  {
    route: 'events',
    url: 'event',
    title: 'Event',
  },
  {
    route: 'accessories',
    url: 'tillbehor',
    title: 'Tillbehör',
  },
  {
    route: 'apparel',
    url: 'klader-skor-hjalm',
    title: 'Kläder, skor och hjälm',
  },
  {
    route: 'contact',
    url: 'kontakt',
    title: 'Kontakta oss',
  },
];

const Home = () => {
  const {data, loading, error} = useQuery(BIKES_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <Page head={{title: 'Testing'}}>
      <Box>
        <Text color="blue">Prova text component</Text>
        <ul>
          {LINKS.map((link) => (
            <li key={link.route}>
              <Link href={`/${link.route}`} as={`/${link.url}`}>
                <a>{link.title}</a>
              </Link>
            </li>
          ))}
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
