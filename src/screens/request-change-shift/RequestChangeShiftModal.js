import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { TEAL, 
  BLACK, 
  WHITE, 
  LIME, 
  GREY, 
  BORDER_STYLE_WITH_SHADOW, 
  FONT_SMALLER, 
  FONT_MEDIUM, 
  FONT_LARGE, 
  SILVER, 
  FONT_SMALL
} from 'HRM/src/theme';
import {
	Text,
	DatePicker
} from 'native-base';
import BasicPicker from 'HRM/src/screens/request-change-shift/BasicPicker';

const spaceHeight = 15;
const commonStyles = StyleSheet.create({
	viewPicker: {
		...BORDER_STYLE_WITH_SHADOW,
		backgroundColor: SILVER, 
	}
})
const styles = StyleSheet.create({
	viewModalContent: {
		backgroundColor: WHITE,
		padding: 15,
	},
	viewContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modal: {
		padding: 1,
	},
	textHeader: {
		fontSize: 20,
		color: BLACK,
		fontWeight: 'bold',
		paddingBottom: 10,
	},
	textDate: {
		fontSize: FONT_LARGE, 
		margin: 20, 
		textAlign: 'center', 
		fontWeight: 'bold'
	},
	textShift: {
		fontSize: FONT_LARGE, 
		marginBottom: spaceHeight
	},
	viewTouchableGroup: {
		flexDirection: 'row-reverse',
	},
	textBold: {
		fontWeight: 'bold',
	},
	viewChangeRequest: {
    ...BORDER_STYLE_WITH_SHADOW,
    backgroundColor: WHITE,
    padding: 10,
	},
	textChangeDetail: {
    color: TEAL,
    fontSize: FONT_SMALL,
    marginBottom: 7,
    fontWeight: 'bold'
  },
  shiftType: {
    color: GREY,
    fontSize: FONT_SMALLER
  },
	touchDone: {
		alignItems:'center',
		justifyContent:'center',
		width:60,
		height:60,
		backgroundColor: LIME,
		borderRadius:100,
	},
	viewChangeRequestContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	viewLeft: {
		flex: 4
	},
	viewRight: {
		flex: 1
	},
	viewChangeWith: {
		flexDirection: 'row',
		marginBottom: spaceHeight,
	},
	viewChangeShift: {
		flexDirection: 'row',
		marginBottom: 25,
	},
	viewTextChange: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center',
	},
	textPickerLabel: {
		fontSize: FONT_MEDIUM
	},
	viewPickerShift: {
		...commonStyles.viewPicker,
		marginBottom: 25,
	},
	viewPickerChange: {
		...commonStyles.viewPicker,
		flex: 5, 
	},
})

export default class RequestChangeShiftModal extends Component {
	handleDonePress = () => {
		this.props.onDone();
	}

	handleOnBackdropPress = () => {
		this.props.onBackdropPress();
	}

	render() {
		const {
			isModalVisible,
		} = this.props;
		return (
			<View style={styles.viewContainer}>
				<Modal 
					isVisible={isModalVisible}
					animationIn='zoomInDown'
					animationOut='zoomOutUp'
					style={styles.modal}
					onBackdropPress={this.handleOnBackdropPress}
				>
					<View style={styles.viewModalContent}>
						<Text style={styles.textDate}>17 AUGUST 2018</Text>
						<Text style={styles.textShift}>SELECT YOUR SHIFT</Text>
						<View style={styles.viewPickerShift}>
							<BasicPicker 
								items={[
									{label: 'Morning Shift (7:00-15:00)', value: '1'},
									{label: 'Afternoon Shift (15:00-23:00)', value: '2'}
								]}
							/>
						</View>
						<View style={styles.viewChangeWith}>
							<View style={styles.viewTextChange}>
								<Text style={styles.textPickerLabel}>WITH</Text>
							</View>
							<View style={styles.viewPickerChange}>
									<BasicPicker 
										items={[
											{label: 'ERIKA EDISON', value: '1'},
											{label: 'RANDY RANDY', value: '2'}
										]}
									/>
							</View>
						</View>
						<View style={styles.viewChangeWith}>
							<View style={styles.viewTextChange}>
								<Text style={styles.textPickerLabel}>DATE</Text>
							</View>
							<View style={styles.viewPickerChange}>
								<DatePicker
									defaultDate={new Date(2018, 4, 4)}
									minimumDate={new Date(2018, 1, 1)}
									maximumDate={new Date(2018, 12, 31)}
									locale={'en'}
									timeZoneOffsetInMinutes={undefined}
									modalTransparent={false}
									animationType={'fade'}
									androidMode={'default'}
									placeHolderText='Select date'
									textStyle={{ color: BLACK, backgroundColor: SILVER }}
									placeHolderTextStyle={{ color: GREY,backgroundColor: SILVER }}
									// onDateChange={}
								/>
							</View>
						</View>
						<View style={styles.viewChangeShift}>
							<View style={styles.viewTextChange}>
								<Text style={styles.textPickerLabel}>SHIFT</Text>
							</View>
							<View style={styles.viewPickerChange}>
									<BasicPicker
										items={[
											{label: 'A (7:00-15:00)', value: '1'},
											{label: 'B (15:00-23:00)', value: '2'}
										]}
									/>
							</View>
						</View>
            <View style={styles.viewChangeRequest}>
              <View style={styles.viewChangeRequestContent}>
                <View style={styles.viewLeft}>
                  <Text style={styles.textChangeDetail}>REQUEST CHANGE</Text>
                  <Text style={styles.textChangeDetail}>07/08/2017 MOIRNING SHIFT (07:00-15:00)</Text>
                  <Text style={styles.shiftType}>REGULAR SHIFT</Text>
                </View>
                <View style={styles.viewRight}>
                  <TouchableOpacity
                    style={styles.touchDone}
										onPress={this.handleDonePress}
                  >
                    <Text style={{color: WHITE}}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
					</View>
				</Modal>
			</View>
		);
	}
}
