import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Fab, Icon, Text, Container, Content } from 'native-base';
import SwapList from './SwapList.js';
import axios from 'axios';
import ConfirmModal from './ConfirmModal';
import { TEAL, FONT_MEDIUM } from 'HRM/src/theme';

const styles = StyleSheet.create({
	textBold: {
		fontWeight: 'bold',
	},
	textContent: {
		fontSize: FONT_MEDIUM,
		lineHeight: 25,
		paddingBottom: 15,
	},
	fabRequestShift: {
		backgroundColor: TEAL, 
		zIndex: 2, 
		opacity: 1
	},
});

export default class SwapView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			swapItems: [],
			isConfirmModalVisible: false,
			exchangeName: '',
			fromDate: '',
			toDate: '',
		};
	}
	
	componentDidMount() {
		this.fetch();
	}

	fetch = async () => {
		const response = await axios.get('http://192.168.5.119:3000/swap');
		this.setState({'swapItems': [...response.data]});
	}

	handleShowConfirmModal = (exchangeName, fromDate, toDate) => {
		this.setState({
			'isConfirmModalVisible': true,
			'exchangeName': exchangeName,
			'fromDate': fromDate,
			'toDate': toDate
		});
	}

	handleHideConfirmModal = () => {
		this.setState({'isConfirmModalVisible': false})
	}

	handleRequestChangeShift = (day) => {
    this.props.navigation.navigate('RequestChangeShift');
  }

	render() {
		const {
			swapItems,
			isConfirmModalVisible,
			exchangeName,
			fromDate,
			toDate,
		} = this.state;
		return (
			<Container>
				<Content style={{zIndex: 2}}>
					<ConfirmModal
						isModalVisible={isConfirmModalVisible}
						onAccept={this.handleHideConfirmModal}
						onDecline={this.handleHideConfirmModal}
					>
						<Text style={styles.textContent}>
							<Text>Change Shift with <Text style={styles.textBold}>{exchangeName}</Text> from{'\n'}</Text>
							<Text style={styles.textBold}>{fromDate}</Text>
							<Text> to </Text>
							<Text style={styles.textBold}>{toDate}</Text>
						</Text>
					</ConfirmModal>
					<SwapList 
						items={swapItems}
						onShowConfirmModal={this.handleShowConfirmModal}
					/>
				</Content>
				<Fab
					style={styles.fabRequestShift}
					onPress={() => this.handleRequestChangeShift()}
				>
					<Icon name='add'/>
				</Fab>
			</Container>
		);
	}
}
