import React from 'react';
import { 
  StyleSheet, 
  Image,
  TouchableOpacity } from 'react-native';
import { 
  View, 
  Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import { 
  BLACK, 
  WHITE, 
  FONT_SMALL, 
  FONT_MEDIUM, 
  BORDER_STYLE_WITH_SHADOW } from 'Alaska/src/theme';

const style = StyleSheet.create({
  viewContainer: {
    width: 200,
    marginRight: 10,
    ...BORDER_STYLE_WITH_SHADOW,
  },
  image: {
    width: 200,
    height: 100,
  },
  viewBottom: {
    backgroundColor: WHITE,
    padding: 5,
  },
  textName: {
    color: BLACK,
    fontSize: FONT_SMALL,
  },
  textPrice: {
    color: BLACK,
    fontSize: FONT_MEDIUM,
    fontWeight: '400',
    marginTop: 3,
  },
});

class CourseListItem extends React.PureComponent {
  handleOnPress = () => {
    this.props.navigation.navigate('PurchaseCourse');
  }

  render() {
    const { image, name, price } = this.props;
    
    return (
      <TouchableOpacity onPress={this.handleOnPress}>
        <View style={style.viewContainer}>
          <Image source={{uri: image}} style={style.image} />
          <View style={style.viewBottom}>
            <Text numberOfLines={2} style={style.textName}>{name}</Text>
            <Text style={style.textPrice}>{price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(CourseListItem);