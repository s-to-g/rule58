import React from 'react';

import Box from 'ui/Box';
import Text from 'ui/Text';
import Link from 'ui/Link';
import Image from 'ui/Image';
import instagramSrc from 'assets/images/instagram.svg';
import facebookSrc from 'assets/images/facebook.svg';
import sv from 'assets/lang/sv';

const Footer = () => {
  return (
    <Box
      backgroundColor="black"
      paddingX="xl"
      paddingY="xxxl"
      display="block"
      width="100%"
    >
      <Box flexDirection={['column', 'row', 'row']}>
        <Box display="block">
          <Box paddingBottom="m" flexDirection="column">
            <Text
              fontSize="l"
              color="white"
              textAlign={['center', 'left', 'left']}
            >
              {sv.footer.address}
            </Text>
            <Text
              fontSize="m"
              color="white"
              textAlign={['center', 'left', 'left']}
            >
              {sv.footer.postal}
            </Text>
          </Box>
          <Box paddingBottom="l" flexDirection="column">
            <Text
              fontSize="l"
              color="white"
              lineHeight="120%"
              textAlign={['center', 'left', 'left']}
            >
              {sv.contact.hoursWeekday}
            </Text>
            <Text
              fontSize="l"
              lineHeight="120%"
              color="white"
              textAlign={['center', 'left', 'left']}
            >
              {sv.contact.hoursSaturday}
            </Text>
          </Box>
          <Box justifyContent={['center', 'left', 'left']}>
            <Link href={sv.contact.hrefTel}>
              <Text
                fontSize="l"
                color="white"
                textAlign={['center', 'left', 'left']}
              >
                {sv.contact.phone}
              </Text>
            </Link>
          </Box>
        </Box>
        <Box
          marginLeft={[0, 'auto', 'auto']}
          paddingTop={['xl', 0]}
          justifyContent={['center', 'end', 'end']}
        >
          <Box marginRight="xl">
            <Link
              href="https://www.instagram.com/rule.58/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box height="100%">
                <Image src={instagramSrc} alt="Instagram" />
              </Box>
            </Link>
          </Box>
          <Link
            href="https://www.facebook.com/Rule58bikeshop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box height="100%">
              <Image src={facebookSrc} alt="Facebook" />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
