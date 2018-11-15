import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'native-base';
import { TEAL, GREY, WHITE } from 'HRM/src/theme';

const style = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    color: TEAL
  },
  inActive: {
    color: GREY,
  }
});

class MemberNoteButtons extends React.PureComponent {
  render() {
    const {
      onMemberPress,
      onNotePress,
      selectedButton,
    } = this.props

    return (
      <View style={style.viewContainer}>
        <Button 
          transparent 
          onPress={onMemberPress}
        >
          <Text style={selectedButton === 'MEMBER' ? style.active : style.inActive}>MEMBER</Text>
        </Button>
        <Button 
          transparent 
          onPress={onNotePress}
        >
          <Text style={selectedButton === 'NOTE' ? style.active : style.inActive}>NOTE</Text>
        </Button>
      </View>
    );
  }
}

export default MemberNoteButtons;