import React from 'react';
import { StyleSheet } from 'react-native';
import {
  View,
  Icon,
  Container,
  Content,
  Button,
} from 'native-base';
import theme, {
  LIGHT_GREY,
} from 'HRM/src/theme';
import MemberList from 'HRM/src/screens/shift-details/MemberList';
import MemberNoteButtons from 'HRM/src/screens/shift-details/MemberNoteButtons';
import ShiftListItem from 'HRM/src/screens/shift-list/ShiftListItem';
import Note from 'HRM/src/screens/shift-details/Note';

const navigationStyle = StyleSheet.create({
  viewNavigationHeaderLeft: {
    flex: 1
  },
  iconNavigationLeft: {
    color: theme.header.backIconColor
  ,}
});

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

class ShiftDetailScreen extends React.PureComponent {
  static navigationOptions = navigator => {
    const headerLeft = (
      <View style={navigationStyle.viewNavigationHeaderLeft}>
        <Button
          transparent
          onPress={__ => navigator.navigation.goBack()}
        >
          <Icon
            name='chevron-left'
            type='Entypo'
            style={navigationStyle.iconNavigationLeft}
          />
        </Button>
      </View>
    );

    return {
      headerLeft: headerLeft,
      title: 'Shift Details',
      headerTitleStyle: {
        color: theme.header.titleColor
      },
      headerStyle: {
        backgroundColor: theme.header.backgroundColor
      }
    };
  }

  state = {
    selectedButton: 'MEMBER',
    note: '',
  };

  handleMemberPress = () => {
    this.setState({ selectedButton: 'MEMBER' });
  };

  handleNotePress = () => {
    this.setState({ selectedButton: 'NOTE' });
  };

  handleNoteChange = note => {
    this.setState({ note });
  };

  renderContent = () => {
    
  };

  render() {
    const {
      note,
      selectedButton,
    } = this.state;

    const members = [
      {
        id: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Chrome_Material_Icon-450x450.png',
        name: 'John Teller',
        isInCharge: true,
      },
    ]

    return (
      <Container style={style.container}>
        <ShiftListItem
          touchable={false}
          hideBorder
          hideRightIcon
          shiftPeriodType='MORNING'
          shiftTitle='Morning Shift'
          dateTime='07:00 - 15:00 10/08/2561'
          location='Location WARD 4A'
          shiftType='Regular Shift'
        />
        <View style={{
          width: '90%', 
          height: 1,
          alignSelf: 'center',
          backgroundColor: LIGHT_GREY,
        }}/>
        <MemberNoteButtons
          selectedButton={selectedButton}
          onMemberPress={this.handleMemberPress}
          onNotePress={this.handleNotePress}
        />
        <View style={{width: '100%', height: 2, backgroundColor: LIGHT_GREY}}/>
        
        {selectedButton === 'MEMBER' ? (
          <Content>
            <MemberList members={members}/>
          </Content>
        ) : (
          <Note value={note} onChange={this.handleNoteChange} />
        )}
      </Container>
    );
  }
}

export default ShiftDetailScreen;