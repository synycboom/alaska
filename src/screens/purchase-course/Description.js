import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import Segment from 'Alaska/src/common/components/Segment';
import { FONT_MEDIUM } from '../../theme';

const styles = StyleSheet.create({
  textContent: {
    fontSize: FONT_MEDIUM
  },
  textShowMore: {
    fontSize: FONT_MEDIUM,
    color: 'red',
    marginTop: 5,
  },
});

export default class Description extends React.PureComponent {
  state = { expanded: false };

  handleExpand = () => {
    this.setState({ expanded: true });
  }

  render() {
    const { text } = this.props;
    const { expanded } = this.state;

    return (
      <Segment header='Description'>
        <Text 
          style={styles.textContent} 
          numberOfLines={expanded ? null : 5}
        >
          {text}
        </Text>

        {!expanded && (
          <TouchableOpacity onPress={this.handleExpand}>
            <Text style={styles.textShowMore}>SHOW MORE</Text>
          </TouchableOpacity>
        )}
      </Segment>
    );
  }
};