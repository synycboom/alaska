import React from 'react';
import { 
  StyleSheet 
} from 'react-native';

import {
  Container,
  Content,
  Icon,
  Text,
} from 'native-base';

import {
  SILVER
} from 'Alaska/src/theme';

import HeaderSection from './HeaderSection';
import VideoPlayer from 'Alaska/src/common/video-player';

const style = StyleSheet.create({
  container: {
    backgroundColor: SILVER,
  },
  headerSection: {
    width: '100%',
  }
});

class PurchaseCourseScreen extends React.PureComponent {
  render() {
    return (
      // <Container style={style.container}>
      //   <Content>
      //     <HeaderSection
      //       style={style.headerSection}
      //       image='https://picsum.photos/400/400/?image=211&gravity=center&blur'
      //       name='Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)'
      //       description='Vue JS is an awesome JavaScript Framework for building Frontend Appliations! VueJS mixes the Best of Angular + React!'
      //       videoLength='21 hours 49 minutes'
      //       instructorName='Created by Maximilan Schwarzmuller'
      //     />
      //   </Content>
      // </Container>
        <VideoPlayer url='https://www.radiantmediaplayer.com/media/bbb-360p.mp4'/>
    );
  }
}

export default PurchaseCourseScreen;