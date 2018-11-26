import React from 'react';
import { 
  StyleSheet 
} from 'react-native';

import {
  Container,
  Content,
  Button,
  Text,
  View,
  Footer,
} from 'native-base';

import {
  ALICE_BLUE
} from 'Alaska/src/theme';

import HeaderSection from './HeaderSection';
import VideoPlayer, { getWidthHeight } from 'Alaska/src/common/components/video-player';
import BuyButton from 'Alaska/src/common/components/BuyButton';
import Curriculum from './Curriculum';
import Description from './Description';
import { BLACK, FONT_XX_LARGE, FONT_MEDIUM, WHITE, GREY, BORDER_STYLE_WITH_SHADOW } from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: ALICE_BLUE,
  },
  headerSection: {
    width: '100%',
  },
  viewContentSection: {
    padding: 10,
    alignItems: 'center',
  },
  videoPlayer: {
    marginBottom: 5,
    ...getWidthHeight('95%'),
  },
  viewFooter: {
    flex: 1, 
    paddingHorizontal: 10,
    backgroundColor: WHITE, 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    ...BORDER_STYLE_WITH_SHADOW, 
  },
  textPrice: {
    fontSize: FONT_XX_LARGE,
    fontWeight: 'bold',
    color: BLACK,
    flex: 0.6,
    textAlign: 'center',
  },
  buyButton: {
    flex: 0.4
  }
});

class PurchaseCourseScreen extends React.PureComponent {
  render() {
    const image='https://picsum.photos/400/400/?image=211&gravity=center&blur';
    const title='Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)';
    const headline = 'Vue JS is an awesome JavaScript Framework for building Frontend Appliations! VueJS mixes the Best of Angular + React!';
    const videoLength='21 hours 49 minutes';
    const instructorName='Created by Maximilan Schwarzmuller';
    const price = 'THB319.00';
    const description='THIS IS A VERY LONG DESCRIPTION\n11111\n22222\n3333\n4444\n5555\n666\n777\n888';
    const trailerVideoUrl = 'https://www.radiantmediaplayer.com/media/bbb-360p.mp4';
    const curriculum = [
      {
        section: 'Getting Started',
        lessons: [
          {
            no: '1',
            title: 'Introduction',
            length: '01:49 mins'
          },
          {
            no: '2',
            title: 'Introduction aaaaaaaa eeeeeeeeee rrrrrrrrrr dd',
            length: '01:49 mins'
          },
        ]
      },
      {
        section: 'Refreshing Next Generation Javascript',
        lessons: [
          {
            no: '3',
            title: 'Module Introduction',
            length: '01:35 mins'
          },
          {
            no: '4',
            title: 'Understanding "let" and "const"',
            length: '03:05 mins'
          },
        ]
      }
    ];

    return (
      <Container style={styles.container}>
        <Content>
          <HeaderSection
            style={styles.headerSection}
            image={image}
            title={title}
            headline={headline}
            videoLength={videoLength}
            instructorName={instructorName}
          />
          <View style={styles.viewContentSection}>
            <VideoPlayer style={styles.videoPlayer} url={trailerVideoUrl}/>
            <Description text={description}/>
            <Curriculum data={curriculum}/>
          </View>
        </Content>
        <Footer>
          <View style={styles.viewFooter}>
            <Text style={styles.textPrice}>{price}</Text>
            <BuyButton style={styles.buyButton}/>
          </View>
        </Footer>
      </Container>
    );
  }
}

export default PurchaseCourseScreen;