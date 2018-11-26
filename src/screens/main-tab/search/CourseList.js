import React from 'react';
import { FlatList } from 'react-native';
import CourseListItem from './CourseListItem';

class CourseList extends React.PureComponent {
  keyExtractor = (item) => `${item.id}`;

  renderItem = ({item}) => (
    <CourseListItem 
      image={item.image}
      name={item.name}
      price={item.price}
    />
  );

  render() {
    const { courses } = this.props;

    return (
      <FlatList
        data={courses}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

export default CourseList;