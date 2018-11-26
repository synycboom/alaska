import React from 'react';
import { FlatList } from 'react-native';
import MyCourseListItem from './MyCourseListItem';

class MyCourseList extends React.PureComponent {
  keyExtractor = (item) => `${item.id}`;

  renderItem = ({item}) => (
    <MyCourseListItem 
      image={item.image}
      name={item.name}
      progress={item.progress}
      instructorName={item.instructor_name}
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

export default MyCourseList;