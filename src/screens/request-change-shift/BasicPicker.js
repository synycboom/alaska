import { StyleSheet, Picker } from 'react-native';
import React, { PureComponent } from 'react';

const styles = StyleSheet.create({
  picker: {
		height: 40,
	},
	pickerItem: {
		height: 40,
  },
});
  
export default class BasicPicker extends PureComponent {
  render() {
    const {
      items,
      style,
      itemStyle,
      mode,
      enabled,
      onValueChange,
      selectedValue,
    } = this.props;
    return (
      <Picker 
        style={style} 
        itemStyle={itemStyle} 
        mode={mode}
        enabled={enabled}
        onValueChange={onValueChange}
        selectedValue={selectedValue}
      >
        {items.map(item => {
          return (<Picker.Item label={item.label} value={item.value} key={item.value}/>);
        })}
      </Picker>
    )
  }
}

BasicPicker.defaultProps = {
  style: styles.picker,
  itemStyle: styles.pickerItem,
  mode: 'dropdown',
  enabled: true
};
