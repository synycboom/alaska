import React from 'react';
import { StyleSheet } from 'react-native';
import {
  View,
  Thumbnail,
  Text,
  Icon,
} from 'native-base';
import {
  YELLOW,
  BORDER_STYLE
} from 'HRM/src/theme';

const style = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    ...BORDER_STYLE,
  },
  viewLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.4,
    justifyContent: 'space-evenly'
  },
  viewRight: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.3,
    justifyContent: 'space-evenly'
  },
  icon: {
    color: YELLOW
  },
});

class MemberListItem extends React.PureComponent {
  render() {
    const {
      imageSource,
      name,
      isInCharge
    } = this.props;

    return (
      <View style={style.viewContainer}>
        <View style={style.viewLeft}>
          <Thumbnail
            small
            source={{ uri: imageSource }}
          />
          <Text>{name}</Text>
        </View>
        {isInCharge && (
          <View style={style.viewRight}>
            <Text>Incharge</Text>
            <Icon
              name='star'
              type='FontAwesome'
              style={style.icon}
            />
          </View>
        )}
      </View>
    );
  }
}

export default MemberListItem;