import React from 'react';

import Page from 'components/Page';
import Box from 'ui/Box';
import Text from 'ui/Text';
import Link from 'ui/Link';
import bikeSrc from 'assets/images/RULE58_STORE_145.jpg';
import {getColor} from 'config/theme';
import sv from 'assets/lang/sv';

const Contact = () => {
  return (
    <Page head={{title: sv.contact.title}}>
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
        >
          <Box borderBottom={`2px solid ${getColor('black')}`} marginBottom="m">
            <Text fontSize="xxl">{sv.contact.pageTitle}</Text>
          </Box>
          <Box flexDirection="column">
            <Text>{sv.contact.addressTitle}</Text>
            <Text fontSize={['l', 'l', 'xl']} lineHeight="100%">
              {sv.contact.address}
            </Text>
          </Box>

          <Box paddingY="m" flexDirection="column">
            <Text>{sv.contact.emailTitle}</Text>
            <Link href={sv.contact.hrefMail}>
              <Text fontSize={['l', 'l', 'xl']} lineHeight="100%">
                {sv.contact.email}
              </Text>
            </Link>
          </Box>
          <Box flexDirection="column">
            <Text>{sv.contact.phoneTitle}</Text>
            <Link href={sv.contact.hrefTel}>
              <Text fontSize={['l', 'l', 'xl']} lineHeight="100%">
                {sv.contact.phone}
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default Contact;
