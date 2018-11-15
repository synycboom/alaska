import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Content, Container, Footer, Text } from 'native-base';
import { WHITE, LIGHT_GREY, BORDER_STYLE_WITH_SHADOW, BORDER_STYLE, GREY, BLACK, FONT_SMALL } from 'HRM/src/theme';
import SummaryList from './SummaryList';

const normalFontSize = FONT_SMALL;

const style = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_GREY,
  },
  content: {
    marginBottom: 5,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    backgroundColor: WHITE,
    ...BORDER_STYLE_WITH_SHADOW,
  },
  viewCard: {
    height: '50%',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    ...BORDER_STYLE,
  },
  viewSummary: {
    flex: 0.7,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: LIGHT_GREY,
    borderRightWidth: 1,
    height: '80%',
  },
  viewPrice: {
    flex: 0.3,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  textSummary: {
    color: GREY,
    fontSize: normalFontSize,
  },
  textSummaryBold: {
    color: BLACK,
    fontSize: normalFontSize,
    fontWeight: 'bold',
  },
  textPrice: {
    fontSize: normalFontSize,
  },
});

class SummaryView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'SUMMARY',
    };
  };

  render() {
    const totalShifts = 15;
    const totalPrice = '6,450';

    const items = [
      {
        title: 'REGULAR SHIFT',
        total: 'Total 15 Shifts',
        detail: '',
        price: 'THB 3,000.00', 
      },
      {
        title: 'EXTRA SHIFT',
        total: 'Total 1 Shifts',
        detail: '-',
        price: 'THB 300.00', 
      },
      {
        title: 'INCHARGE SHIFT',
        total: 'Total 9 Shifts',
        detail: 'From Day-off\nTo 19/10/2018 15:00-23:00',
        price: 'THB 3150.00', 
      },
      {
        title: 'VACATION',
        total: 'Total 1 Days',
        detail: '5 Days remaining (this year)',
        price: '', 
      },
    ]
    return (
      <Container style={style.container}>
        <Content style={style.content}>
          <SummaryList items={items}/>
        </Content>
        <Footer style={style.footer}>
          <View style={style.viewCard}>
            <View style={style.viewSummary}>
              <Text>
                <Text style={style.textSummary}>You have</Text>
                <Text style={style.textSummaryBold}> {totalShifts} shifts </Text>
                <Text style={style.textSummary}>in this month</Text>
              </Text>
            </View>
            <View style={style.viewPrice}>
              <Text style={style.textPrice}>THB {totalPrice}</Text>
            </View>
          </View>
        </Footer>
      </Container>
    )
  }
}

export default SummaryView;