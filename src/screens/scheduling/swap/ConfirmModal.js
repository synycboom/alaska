import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { BLACK, WHITE, LIME, GREY} from 'HRM/src/theme';

const styles = StyleSheet.create({
	viewModalContent: {
		backgroundColor: WHITE,
		padding: 20,
		borderColor: 'rgba(0, 0, 0, 0.1)',
	},
	viewContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modal: {
		padding: 25,
	},
	textHeader: {
		fontSize: 20,
		color: BLACK,
		fontWeight: 'bold',
		paddingBottom: 10,
	},
	viewTouchableGroup: {
		flexDirection: 'row-reverse',
	},
	textBold: {
		fontWeight: 'bold',
	},
})

export default class ConfirmModal extends Component {
	handleOnAccept = () => {
		this.props.onAccept();
	}

	handleOnDecline = () => {
		this.props.onDecline();
	}

	render() {
		const {
			isModalVisible,
			children,
			headerName
		} = this.props;
		return (
			<View style={styles.viewContainer}>
				<Modal 
					isVisible={isModalVisible}
					animationIn='zoomInDown'
					animationOut='zoomOutUp'
					style={styles.modal}
				>
					<View style={styles.viewModalContent}>
						<Text style={styles.textHeader}>{headerName}</Text>
						<View>
							{children}
						</View>
						<View style={styles.viewTouchableGroup}>
							<TouchableOpacity onPress={this.handleOnAccept} style={{paddingLeft: 40}}>
								<Text style={[{color: LIME}, styles.textBold]}>ACCEPT</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.handleOnDecline} >
								<Text style={[{color: GREY}, styles.textBold]}>DECLINE</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			</View>
		);
	}
}

ConfirmModal.defaultProps = {
  headerName: 'Are you sure?'
};
