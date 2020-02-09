import React from 'react';
import NextLink from 'next/link';

import Box from 'ui/Box';
import Text from 'ui/Text';
import Link from 'ui/Link';

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

const Header = () => {
  return (
    <Box padding="m" alignItems="center">
      <Box>
        <NextLink href="/" passHref>
          <Link>
            <Text fontSize="xl">Rule 58</Text>
          </Link>
        </NextLink>
      </Box>
      <Box marginLeft="auto">
        <nav>
          {LINKS.map((link) => (
            <NextLink href={`/${link.route}`} key={link.route} passHref>
              <Link>{link.title}</Link>
            </NextLink>
          ))}
        </nav>
      </Box>
    </Box>
  );
};

export default Header;
