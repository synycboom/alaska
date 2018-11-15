import { FlatList, StyleSheet, View } from 'react-native';
import SwapBox from './SwapBox.js';
import React, { Component } from 'react';
import { GREY } from 'HRM/src/theme';

const styles = StyleSheet.create({
	viewSeparator: {
		height: 1,
		backgroundColor: GREY,
  },
  viewFooter: {
    height: 1,
    backgroundColor: GREY,
    marginBottom: 90
  }
});

export default class SwapList extends Component {
  render() {
    const {
      items,
      onShowConfirmModal
    } = this.props;
    return (
      <FlatList
        data={items}
        renderItem = {
          ({item}) => (
            <SwapBox
              keys={item.id}
              headerName={item.header} 
              exchangeName={item.name} 
              statusName={item.status} 
              fromDate={item.from}
              toDate={item.to}
              onShowConfirmModal={onShowConfirmModal}
            />
          )
        }
        keyExtractor={(item, index) => item.id.toString()}
        ItemSeparatorComponent={this.renderSeparator}
        ListFooterComponent={this.renderFooter}
      />
    )
  }

  renderFooter = () => {
		return (
      <View
        style={styles.viewFooter}
      />
		);
	}

	renderSeparator = () => {
		return (
			<View
				style={styles.viewSeparator}
			/>
		);
	}
}