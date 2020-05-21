import React from 'react';
import styled from 'styled-components';

import Page from 'components/Page';
import Box from 'ui/Box';
import Text from 'ui/Text';
import Link from 'ui/Link';
import bikeSrc from 'assets/images/RULE58_STORE_145.jpg';
import {getColor} from 'config/theme';
import sv from 'assets/lang/sv';

const ContactText = styled(Text).attrs({
  fontSize: ['m', 'l', 'xl'],
  lineHeight: '100%',
})``;

const Contact = () => {
  return (
    <Page head={{title: sv.contact.title, desc: sv.contact.metaDesc}}>
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
          minHeight="calc(100vh - 73px)"
          backgroundColor="greyLight"
          flexDirection="column"
          justifyContent="center"
          paddingX="xl"
        >
          <Box borderBottom={`2px solid ${getColor('black')}`} marginBottom="m">
            <Text fontSize={['xl', 'xl', 'xxl']}>{sv.contact.pageTitle}</Text>
          </Box>
          <Box flexDirection="column">
            <Text>{sv.contact.hoursTitle}</Text>
            <Box paddingBottom="xs">
              <ContactText>{sv.contact.hoursWeekday}</ContactText>
            </Box>
            <ContactText>{sv.contact.hoursSaturday}</ContactText>
          </Box>
          <Box paddingY="m" flexDirection="column">
            <Text>{sv.contact.addressTitle}</Text>
            <ContactText>{sv.contact.address}</ContactText>
          </Box>
          <Box paddingBottom="m" flexDirection="column">
            <Text>{sv.contact.emailTitle}</Text>
            <Link href={sv.contact.hrefMail}>
              <ContactText>{sv.contact.email}</ContactText>
            </Link>
          </Box>
          <Box flexDirection="column" paddingBottom="l">
            <Text>{sv.contact.phoneTitle}</Text>
            <Link href={sv.contact.hrefTel}>
              <ContactText>{sv.contact.phone}</ContactText>
            </Link>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default Contact;
