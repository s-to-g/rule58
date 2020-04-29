import React from 'react';
import styled from 'styled-components';
import {useQuery} from '@apollo/react-hooks';

import Box from 'ui/Box';
import Text from 'ui/Text';
import Page from 'components/Page';
import Image from 'ui/Image';
import sv from 'assets/lang/sv';
import {getMaxwidth} from 'config/theme';
import HOME_SECTIONS_QUERY from 'graphql/HomeSectionsQuery';
import {getImageRatio, getImageHeightPercentage} from 'utils/imageRatio';

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

const ImageInner = styled(Box).attrs({
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
})``;

const ImageOuter = styled(Box).attrs({
  backgroundColor: 'greyLight',
  height: '0',
  position: 'relative',
  width: '100%',
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
  const {data} = useQuery(HOME_SECTIONS_QUERY);
  const homeSections = data?.homeSections;
  const maxWidth = getMaxwidth();
  return (
    <Page head={{title: sv.home.title}}>
      <Box paddingTop={['0', '0', 'xl']} display="block">
        {homeSections &&
          homeSections.map((section: any, index: number) => {
            const {width: imageWidth, height: imageHeight} = section.picture;
            const imageRatio = getImageRatio({
              width: imageWidth,
              height: imageHeight,
            });
            const heightPercentage = getImageHeightPercentage(imageRatio);
            if (index % 2 === 0) {
              return (
                <SectionWrapper key={section.title}>
                  <Box
                    maxWidth={maxWidth}
                    width="100%"
                    marginX="auto"
                    flexDirection={['column-reverse', 'column-reverse', 'row']}
                  >
                    <TextOuter>
                      <TextInner>
                        <Title>{section.title}</Title>
                        <Desc>{section.description}</Desc>
                      </TextInner>
                    </TextOuter>

                    <ImageWrapper paddingRight={[0, 0, 'xl']}>
                      <ImageOuter paddingBottom={`${heightPercentage}%`}>
                        <ImageInner>
                          <Image src={section.picture.url} />
                        </ImageInner>
                      </ImageOuter>
                    </ImageWrapper>
                  </Box>
                </SectionWrapper>
              );
            } else {
              return (
                <SectionWrapper key={section.title}>
                  <ColorBlock />
                  <Box
                    maxWidth={maxWidth}
                    width="100%"
                    marginX="auto"
                    flexDirection={['column', 'column', 'row']}
                  >
                    <ImageWrapper paddingLeft={[0, 0, 'xl']}>
                      <ImageOuter paddingBottom={`${heightPercentage}%`}>
                        <ImageInner>
                          <Image src={section.picture.url} />
                        </ImageInner>
                      </ImageOuter>
                    </ImageWrapper>
                    <TextOuter>
                      <TextInner>
                        <Title color="white">{section.title}</Title>
                        <Desc color="white">{section.description}</Desc>
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
