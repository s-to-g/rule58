import React from 'react';

import Page from 'components/Page';
// import CategoryLayout from 'components/CategoryLayout';
import Box from 'ui/Box';
import Text from 'ui/Text';
import sv from 'assets/lang/sv';

const About = () => (
  <Page head={{title: sv.about.title, desc: sv.about.metaDesc}}>
    <Box>
      <Text>Om oss</Text>
    </Box>
  </Page>
);

export default About;
