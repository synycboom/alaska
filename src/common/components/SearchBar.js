import React from 'react';

import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  View, 
  Icon,
  Text
} from 'native-base';

import { 
  BORDER_STYLE, 
  FONT_MEDIUM, 
  LIGHT_GREY, 
  BLACK, 
  DARK_GREY, 
  RED 
} from '../../theme';


const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewInputBox: {
    ...BORDER_STYLE,
    borderRadius: 5,
    backgroundColor: LIGHT_GREY,
    height: FONT_MEDIUM + 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  textInput: {
    padding: 0,
    color: BLACK,
    flex: 1,
  },
  iconSearch: {
    fontSize: 25,
    color: DARK_GREY,
    flexBasis: 20,
    marginHorizontal: 10,
  },
  iconClear: {
    fontSize: 20,
    color: DARK_GREY,
    marginHorizontal: 10,
  },
  iconFilter: {
    fontSize: 20,
    color: RED,
    marginHorizontal: 10,
  },
  textCancel: {
    color: RED,
    marginHorizontal: 10,
  }
});

export default class Search extends React.PureComponent {
  state = {
    focus: false,
    showClearButton: false
  };

  static defaultProps = {
    withFilter: true,
    onCancel() {},
    onChangeText() {},
  }

  focus = () => {
    this.ref.focus();
  };

  handleFocus = () => {
    this.setState({ focus: true });
  };

  handleBlur = () => {
    this.setState({ focus: false });
  };

  handleChangeText = (text) => {
    if (text) {
      this.setState({ showClearButton: true });
    } else {
      this.setState({ showClearButton: false });
    }
    this.props.onChangeText();
  };
  
  handleCancel = () => {
    this.ref.blur();
    this.props.onCancel();
  };
  
  handleClear = () => {
    this.ref.clear();
    this.setState({ showClearButton: false });
  };

  render() {
    const {
      focus,
      showClearButton
    } = this.state;

    const {
      withFilter,
      onFilterPress,
      onSubmitEditing,
    } = this.props;

    return (
      <View style={styles.viewContainer}>
        <View style={styles.viewInputBox}>
          <Icon style={styles.iconSearch} name='ios-search'/>
          <TextInput 
            style={styles.textInput} 
            onChangeText={this.handleChangeText}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onSubmitEditing={onSubmitEditing}
            ref={ref => this.ref = ref}
          />
          {showClearButton && (
            <TouchableOpacity onPress={this.handleClear}>
              <Icon style={styles.iconClear} name='md-close-circle' type='Ionicons'/>
            </TouchableOpacity>
          )}
        </View>
        {focus && (
          <TouchableOpacity onPress={this.handleCancel}>
            <Text style={styles.textCancel}>Cancel</Text>
          </TouchableOpacity>
        )}
        {withFilter && (
          <TouchableOpacity onPress={onFilterPress}>
            <Icon style={styles.iconFilter} name='filter' type='Feather'/>
          </TouchableOpacity>
        )}
      </View>
    );
  }
};