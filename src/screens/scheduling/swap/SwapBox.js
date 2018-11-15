import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { WHITE, TEAL, LIME, BLACK, FONT_SMALL, FONT_MEDIUM } from 'HRM/src/theme'


const mapColor = {
	'APPROVED': LIME,
	'REJECTED': '#ff1a5b',
	'REQUESTED': '#2295f3',
	'PENDING FOR APPROVE': '#ff9700',
};

const styles = StyleSheet.create({
	textStatusStyle: {
		fontSize: FONT_SMALL,
		color: BLACK,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	textHeaderStyle: {
		fontSize: FONT_MEDIUM,
		color: TEAL,
		fontWeight: 'bold'
	},
	viewBox: {
		padding: 14,
		flex: 1,
		justifyContent: 'space-between',
	},
	viewHeader: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	viewDetail: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	viewLeftHeader: {
		flex: 3,
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	viewRightHeader: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	viewDetailLeft: {
		flexDirection: 'row',
		flex: 3
	},
	viewDetailRight: {
		flex: 1
	},
});

export default class SwapBox extends Component {
	render() {
		const {
			headerName,
			exchangeName,
			statusName,
			fromDate,
			toDate,
		} = this.props;
		const statusColor = mapColor[statusName];
		const { textStatusStyle } = styles;
		const combineStyles = StyleSheet.flatten([textStatusStyle, {'color': statusColor}]);
		const showButton = statusName == 'REQUESTED';
		const button = showButton && (
			<Button 
				title='ACCEPT' 
				color={LIME}
				onPress={() => {
					this.props.onShowConfirmModal(exchangeName, fromDate, toDate)
				}}
			/>
		);

		return (
			<View style={styles.viewBox}>
				<View style={styles.viewHeader}>
					<View style={styles.viewLeftHeader}>
						<Text style={styles.textHeaderStyle}>{headerName} {exchangeName}</Text>
					</View>
					<View style={styles.viewRightHeader}>
						<Text style={combineStyles}>{statusName}</Text>
					</View>
				</View>
				<View style={styles.viewDetail}>
					<View style={styles.viewDetailLeft}>
						<View style={{paddingRight: 10}}>
							<Text>From:</Text>
							<Text>To:</Text>
						</View>
						<View>
							<Text>{fromDate}</Text>
							<Text>{toDate}</Text>
						</View>
					</View>
					<View style={styles.viewDetailRight}>
						{button}
					</View>
				</View>
			</View>
		);
	}
}

