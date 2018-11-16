import React from 'react';
import {
  StyleSheet,
  ImageBackground
} from 'react-native';

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
    height: '100%',
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
  textName: {
    fontSize: FONT_LARGER,
    color: WHITE,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textDescription: {
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
  iconBack: {
    position: 'absolute',
    top: 5,
    left: 5,
    color: SILVER,
  },
});

class HeaderSection extends React.PureComponent {
  render() {
    const {
      image,
      name,
      description,
      videoLength,
      instructorName,
    } = this.props;

    return (
      <ImageBackground source={{uri: image}} style={style.imageBackground}>
        <View style={style.viewContainer}>
          <Text style={style.textName}>{name}</Text>
          <Text style={style.textDescription}>{description}</Text>
          <View style={style.viewTags}>
            <View style={style.tag}>
              <Text style={style.textTag}>{videoLength}</Text>
            </View>
            <View style={style.tag}>
              <Text style={style.textTag}>{instructorName}</Text>
            </View>
          </View>
        </View>
        <Icon
          style={style.iconBack}
          name='chevron-left' 
          type='Entypo'
        />
      </ImageBackground>
    );
  }
}

export default HeaderSection;