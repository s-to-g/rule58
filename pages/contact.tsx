import React from 'react';

import Page from 'components/Page';
import Box from 'ui/Box';
import Text from 'ui/Text';
import Link from 'ui/Link';
import bikeSrc from 'assets/images/RULE58_STORE_145.jpg';
import {getColor} from 'config/theme';

const Contact = () => {
  return (
    <Page head={{title: 'Kontakta oss'}}>
      <Box width="100%" flexDirection={['column', 'column', 'row']}>
        <Box
          width={['100%', '100%', '40%']}
          height={['0', '0', 'auto']}
          backgroundImage={`url(${bikeSrc})`}
          backgroundSize="cover"
          backgroundPosition="center"
        />
        <Box
          width={['100%', '100%', '60%']}
          height="calc(100vh - 73px)"
          backgroundColor="greyLight"
          flexDirection="column"
          justifyContent="center"
          paddingX="xl"
          // alignItems="center"
        >
          <Box borderBottom={`2px solid ${getColor('black')}`} marginBottom="m">
            <Text fontSize="xxl">Säg hej.</Text>
          </Box>
          <Box flexDirection="column">
            <Text>Adress:</Text>
            <Text fontSize={['l', 'l', 'xl']} lineHeight="100%">
              Bobergsgatan 73, Stockholm
            </Text>
          </Box>

          <Box paddingY="m" flexDirection="column">
            <Text>Mail:</Text>
            <Link href="mailto:rule58bikeshop@gmail.com">
              <Text fontSize={['l', 'l', 'xl']} lineHeight="100%">
                rule58bikeshop@gmail.com
              </Text>
            </Link>
          </Box>
          <Box flexDirection="column">
            <Text>Telefon:</Text>
            <Link href="tel:08-000000">
              <Text fontSize={['l', 'l', 'xl']} lineHeight="100%">
                08-XXX XXX XX
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default Contact;
