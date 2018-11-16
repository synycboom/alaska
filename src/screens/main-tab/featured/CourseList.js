import React from 'react';
import { FlatList } from 'react-native';
import { View, Text } from 'native-base';
import CourseListItem from './CourseListItem';

class CourseList extends React.PureComponent {
  keyExtractor = (item, index) => `${item.id}`;

  renderItem = ({item}) => (
    <CourseListItem 
      image={item.image}
      name={item.name}
      price={item.price}
    />
  );

  render() {
    const { items } = this.props;

    return (
      <FlatList
        data={items}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        horizontal
      />
    );
  }
}

export default CourseList;