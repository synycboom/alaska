import React from "react";
import axios from 'axios';
import { Content, Container } from 'native-base';
import Calendar from 'HRM/src/common/Calendar';
import ScheduleSummary from './ScheduleSummary';

class MyScheduleView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'MY SCHEDULE',
    };
  }
  
  constructor(props) {
    super(props);
    this.state = {
      markedDates: {}
    };
  }
  
  componentDidMount() {
    this.fetchData();
  }
  
  fetchData = async () => {
    const markedDates = {};
    const response = await axios.get('http://192.168.5.95:8000/service-slot-th');
    const items = response.data.map(item => ({
      ...item,
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
  
  handleDayPress = (day) => {
    this.props.navigation.navigate('ShiftList');
  }
  
  render() {
    const {
      markedDates
    } = this.state;
    
    return (
      <Container>
        <Content>
          <Calendar
            useBEYear
            markedDates={markedDates}
            onDayPress={this.handleDayPress}
          />
          <ScheduleSummary
            totalShifts='25'
            morningSummary='Morning (7-15)'
            morningShifts='11 Shifts'
            afternoonSummary='Afternoon (15-23)' 
            afternoonShifts='4 Shifts'
            nightSummary='Night (15-23)'
            nightShifts='10 Shifts'
          />
        </Content>
      </Container>
    );
  }
}
  
export default MyScheduleView;