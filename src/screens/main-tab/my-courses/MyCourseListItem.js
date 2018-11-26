import React from 'react';
import { 
  StyleSheet, 
  Image,
  TouchableOpacity 
} from 'react-native';

import { 
  View, 
  Text 
} from 'native-base';

import { 
  withNavigation 
} from 'react-navigation';

import { 
  BLACK, 
  WHITE, 
  FONT_SMALL, 
} from 'Alaska/src/theme';

import { GREY } from '../../../theme';
import ProgressBar from './ProgressBar';

const style = StyleSheet.create({
  viewContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
  },
  viewRight: {
    backgroundColor: WHITE,
    padding: 5,
    flex: 1,
  },
  textName: {
    color: BLACK,
    fontSize: FONT_SMALL,
  },
  textInstructorName: {
    color: GREY,
    fontSize: FONT_SMALL,
    marginVertical: 5,
  },
  textPercent: {
    color: GREY,
    fontSize: FONT_SMALL,
    marginVertical: 5,
  }
});

class MyCourseListItem extends React.PureComponent {
  handleOnPress = () => {
    // this.props.navigation.navigate('PurchaseCourse');
  }

  render() {
    const { image, name, instructorName, progress } = this.props;
    
    return (
      <TouchableOpacity onPress={this.handleOnPress}>
        <View style={style.viewContainer}>
          <Image source={{uri: image}} style={style.image} />
          <View style={style.viewRight}>
            <Text numberOfLines={2} style={style.textName}>{name}</Text>
            <Text style={style.textInstructorName}>{instructorName}</Text>
            <ProgressBar percent={progress}/>
            <Text style={style.textPercent}>{`${progress}% ` + 'completed'}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(MyCourseListItem);