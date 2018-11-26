import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {
  withNavigation
} from 'react-navigation';

import {
  Text,
  View,
  Icon,
} from 'native-base';

import {
  WHITE,
  SILVER,
  FONT_SMALL,
  FONT_LARGER,
  FONT_MEDIUM,
} from 'Alaska/src/theme';

const style = StyleSheet.create({
  imageBackground: {
    width: '100%',
    position: 'relative',
  },
  viewContainer: {
    marginVertical: 35,
    marginHorizontal: 20,
  },
  viewTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textTitle: {
    fontSize: FONT_LARGER,
    color: WHITE,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textHeadline: {
    fontSize: FONT_MEDIUM,
    color: WHITE,
    marginLeft: 10,
  },
  tag: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: WHITE,
    paddingHorizontal: 15,
    margin: 5,
  },
  textTag: {
    fontSize: FONT_SMALL,
    color: WHITE,
  },
  iconBackContainer: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  iconBack: {
    color: SILVER,
  },
});

class HeaderSection extends React.PureComponent {
  handleBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    const {
      image,
      title,
      headline,
      videoLength,
      instructorName,
    } = this.props;

    return (
      <ImageBackground source={{uri: image}} style={style.imageBackground}>
        <View style={style.viewContainer}>
          <Text style={style.textTitle}>{title}</Text>
          <Text style={style.textHeadline}>{headline}</Text>
          <View style={style.viewTags}>
            <View style={style.tag}>
              <Text style={style.textTag}>{videoLength}</Text>
            </View>
            <View style={style.tag}>
              <Text style={style.textTag}>{instructorName}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={style.iconBackContainer} onPress={this.handleBack}>
          <Icon
            style={style.iconBack}
            name='chevron-left' 
            type='Entypo'
          />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

export default withNavigation(HeaderSection);