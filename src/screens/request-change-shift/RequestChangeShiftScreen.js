import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Calendar from 'HRM/src/common/Calendar';
import {
  Button,
  Icon,
  Text,
} from 'native-base';
import theme, { BORDER_STYLE_WITH_SHADOW } from 'HRM/src/theme';
import axios from 'axios';
import RequestChangeShiftModal from './RequestChangeShiftModal';
import ConfirmModal from 'HRM/src/screens/scheduling/swap/ConfirmModal';

const styles = StyleSheet.create({
  headerLeftContainer: {
    flex: 1
  },
  headerLeftIcon: {
    color: theme.header.backIconColor
  },
  viewCalendar: {
    ...BORDER_STYLE_WITH_SHADOW,
  },
  textBold: {
		fontWeight: 'bold',
	},
})

class RequestChangeShiftScreen extends React.PureComponent {
  static navigationOptions = navigator => {
    const headerLeft = (
      <View style={styles.headerLeftContainer}>
        <Button
          transparent
          onPress={__ => navigator.navigation.goBack()}
        >
          <Icon
            name='chevron-left'
            type='Entypo'
            style={styles.headerLeftIcon}
          />
        </Button>
      </View>
    )
    return {
      headerLeft: headerLeft,
      title: 'Request Change Shift',
      headerTitleStyle: {
        color: theme.header.titleColor
      },
      headerStyle: {
        backgroundColor: theme.header.backgroundColor
      }
    }
  }
  
  constructor(props) {
    super(props);
    this.state = {
      markedDates: {},
      isRequestModalVisible: false,
      isConfirmModalVisible: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  
  handleHideConfirmModal = () => {
		this.setState({'isConfirmModalVisible': false})
  }
  
  fetchData = async () => {
    const markedDates = {};
    const response = await axios.get('http://192.168.5.119:3000/service-slot-th');
    const items = response.data.map(item => ({
      ...item,
      selected: false,
      morning: {
        ...item.morning,
        inCharge: item.morning.in_charge
      },
      afternoon: {
        ...item.afternoon,
        inCharge: item.afternoon.in_charge
      },
      night: {
        ...item.night,
        inCharge: item.night.in_charge
      },
    }));
    
    items.forEach(item => { markedDates[item.date] = item });
    this.setState({ markedDates });
  }

  convertToBEIfNeeded(str) {
    if (this.props.useBEYear && str) {
      return adToBe(str, 'DD/MM/YYYY');
    }
    return str;
  }

  handleDayPress = (event) => {
    const date = this.convertToBEIfNeeded(event.dateString);
    const markedDates = this.state.markedDates;
    const markedSelectedDates = {
      ...markedDates
    };
    for (const key in markedDates) {
      markedSelectedDates[key] = {...markedDates[key]};
      if (key == date) {
        markedSelectedDates[key]['selected'] = true;
      }
      else {
        markedSelectedDates[key]['selected'] = false;
      }
    }
    this.setState({'markedDates': markedSelectedDates, 'isRequestModalVisible': true});
  }

  handleOnBackdropPress = () => {
    this.setState({'isRequestModalVisible': false})
  }
  handleOnDone = () => {
    this.setState({
      'isRequestModalVisible': false,
      'isConfirmModalVisible': true
    })
  }

  render() {
    const {
      markedDates,
      isRequestModalVisible,
      isConfirmModalVisible
    } = this.state;
    return (
      <View>
        <View style={styles.viewCalendar}>
          <ConfirmModal
						isModalVisible={isConfirmModalVisible}
						onAccept={this.handleHideConfirmModal}
						onDecline={this.handleHideConfirmModal}
					>
						<Text style={styles.textContent}>
							<Text>Change Shift with <Text style={styles.textBold}></Text> from{'\n'}</Text>
							<Text style={styles.textBold}></Text>
							<Text> to </Text>
							<Text style={styles.textBold}></Text>
						</Text>
					</ConfirmModal>
          <RequestChangeShiftModal
            isModalVisible={isRequestModalVisible}
            onBackdropPress={this.handleOnBackdropPress}
            onDone={this.handleOnDone}
          />
          <Calendar
            useBEYear
            markedDates={markedDates}
            onDayPress={this.handleDayPress}
          />
        </View>
      </View>
    )
  }
}

export default RequestChangeShiftScreen;