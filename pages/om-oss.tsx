import React from 'react';
// import styled from 'styled-components';

import Page from 'components/Page';
import CategoryLayout from 'components/CategoryLayout';
import sv from 'assets/lang/sv';
import philipSrc from 'assets/images/philip.jpg';
import fredrikSrc from 'assets/images/fredrik.jpg';

const aboutUsContent = [
  {
    id: 1,
    title: sv.about.pageTitle,
    picture: {
      url: philipSrc,
    },
    description: sv.about.intro,
  },
  {
    id: 2,
    title: sv.about.fredrik.title,
    picture: {
      url: fredrikSrc,
    },
    description: sv.about.fredrik.desc,
  },
  {
    id: 3,
    title: sv.about.philip.title,
    picture: {
      url: philipSrc,
    },
    description: sv.about.philip.desc,
  },
  {
    id: 4,
    description: sv.about.other,
  },
];

console.log('aboutUsContent', aboutUsContent);

const About = () => {
  return (
    <Page head={{title: sv.about.title, desc: sv.about.metaDesc}}>
      <CategoryLayout items={aboutUsContent} />
    </Page>
  );
};

export default About;
