import React from 'react';
import styled from 'styled-components';

import Box from 'ui/Box';
import Text from 'ui/Text';
import Page from 'components/Page';
import Image from 'ui/Image';
import bikingImage from 'assets/images/RULE58_STORE_016.jpg';
import mechanicsImage from 'assets/images/RULE58_STORE_089.jpg';
import coffeeImage from 'assets/images/RULE58_STORE_019.jpg';
import storeImage from 'assets/images/RULE58_STORE_006.jpg';
import sv from 'assets/lang/sv';
import {getMaxwidth} from 'config/theme';

const SECTION_CONTENT = [
  {
    title: sv.home.bikeTitle,
    desc: sv.home.bikeDesc,
    image: storeImage,
  },
  {
    title: sv.home.mechanicsTitle,
    desc: sv.home.mechanicsDesc,
    image: mechanicsImage,
  },
  {
    title: sv.home.coffeeTitle,
    desc: sv.home.coffeeDesc,
    image: coffeeImage,
  },
  {
    title: sv.home.cyclingTitle,
    desc: sv.home.cyclingDesc,
    image: bikingImage,
  },
];

const SectionWrapper = styled(Box).attrs({
  width: '100%',
  paddingBottom: ['l', 'l', 'xxxl'],
  position: 'relative',
  display: 'flex',
})``;

const ImageWrapper = styled(Box).attrs({
  width: ['100%', '100%', '60%'],
  position: 'relative',
  zIndex: 2,
})``;

const TextOuter = styled(Box).attrs({
  width: ['100%', '100%', '40%'],
  paddingX: ['m', 'm', 'xl'],
  paddingY: ['m', 'm', 0],
  justifyContent: 'center',
  position: 'relative',
  zIndex: 2,
})``;

const TextInner = styled(Box).attrs({
  flexDirection: 'column',
  paddingTop: ['s', 's', '0'],
  position: 'relative',
  zIndex: 2,
})``;

const ColorBlock = styled(Box).attrs({
  width: '100%',
  height: '100%',
  backgroundColor: 'greenDarker',
  position: 'absolute',
  top: ['0', '0', '-150px'],
  left: '0',
})``;

const Title = styled(Text).attrs({
  fontSize: ['l', 'xl', 'xxl'],
  lineHeight: '100%',
  paddingBottom: 's',
})``;

const Desc = styled(Text).attrs({
  fontSize: ['m', 'm', 'l'],
})``;

const Home = () => {
  const maxWidth = getMaxwidth();
  return (
    <Page head={{title: 'Cyklar, kläder och tillbehör'}}>
      <Box paddingTop={['0', '0', 'xxxl']} display="block">
        {SECTION_CONTENT.map((section, index) => {
          if (index % 2 === 0) {
            return (
              <SectionWrapper
                key={section.title}
                flexDirection={['column-reverse', 'column-reverse', 'row']}
              >
                <Box maxWidth={maxWidth} marginX="auto">
                  <TextOuter paddingX={['m', 'm', 'xl']}>
                    <TextInner>
                      <Title>{section.title}</Title>
                      <Desc>{section.desc}</Desc>
                    </TextInner>
                  </TextOuter>
                  <ImageWrapper paddingRight={[0, 0, 'xl']}>
                    <Image src={section.image} alt="test" />
                  </ImageWrapper>
                </Box>
              </SectionWrapper>
            );
          } else {
            return (
              <SectionWrapper
                key={section.title}
                flexDirection={['column', 'column', 'row']}
              >
                <ColorBlock />
                <Box maxWidth={maxWidth} marginX="auto">
                  <ImageWrapper paddingLeft={[0, 0, 'xl']}>
                    <Image src={section.image} alt="test" />
                  </ImageWrapper>
                  <TextOuter>
                    <TextInner>
                      <Title color="white">{section.title}</Title>
                      <Desc color="white">{section.desc}</Desc>
                    </TextInner>
                  </TextOuter>
                </Box>
              </SectionWrapper>
            );
          }
        })}
      </Box>
    </Page>
  );
};

export default Home;
