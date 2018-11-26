import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Accordion, Icon } from 'native-base';
import Segment from 'Alaska/src/common/components/Segment';
import { FONT_MEDIUM, FONT_X_SMALL, DARK_GREY } from '../../theme';
import _ from 'lodash';

const styles = StyleSheet.create({
  accordion: {
    borderWidth: 0,
  },
  viewHeader: { 
    flexDirection: 'row', 
    paddingVertical: 5, 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  textHeader: {
    fontSize: FONT_MEDIUM,
  },
  icon: {
    fontSize: FONT_MEDIUM
  },
  viewItemContainer: {
    flexDirection: 'row'
  },
  viewNoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '20%',
  },
  textNo: {
    fontSize: FONT_MEDIUM
  },
  titleContainer: {
    flexBasis: '80%',
  },
  textTitle: {
    fontSize: FONT_MEDIUM
  },
  textLength: {
    fontSize: FONT_X_SMALL,
    color: DARK_GREY,
  },
});

export default class Curriculum extends React.PureComponent {
  renderHeader = (item, expanded) => {
    return (
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader} numberOfLines={1}>
          {item.section}
        </Text>
        {expanded
          ? <Icon style={styles.icon} name='remove' />
          : <Icon style={styles.icon} name='add' />}
      </View>
    );
  }

  renderContent = (content) => {
    const items = _.map(content.lessons, (lesson, index) => (
      <View style={styles.viewItemContainer} key={index}>
        <View style={styles.viewNoContainer}>
          <Text style={styles.textNo}>{lesson.no}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle} numberOfLines={1}>{lesson.title}</Text>
          <Text style={styles.textLength} numberOfLines={1}>{lesson.length}</Text>
        </View>
      </View>
    ));

    return (
      <View>
        {items}
      </View>
    );
  }
  render() {
    const { data } = this.props;

    return (
      <Segment header='Curriculum'>
        <Accordion style={styles.accordion}
          dataArray={data} 
          expanded={0}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
        />
      </Segment>
    );
  }
}