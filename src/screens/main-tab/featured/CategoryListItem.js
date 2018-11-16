import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import CourseList from './CourseList';
import { apis } from 'Alaska/src/apis';
import { GREY, FONT_MEDIUM } from 'Alaska/src/theme';

const style = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  text: {
    color: GREY,
    fontSize: FONT_MEDIUM,
    marginBottom: 5,
  }
});

class CategoryListItem extends React.PureComponent {
  state = {
    isLoading: true,
    courses: [],
  }

  fetchData = async () => {
    const { categoryId } = this.props;
    const response = await apis.course.getCourses({ category: categoryId });
    this.setState({ courses: response.data });
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    const { categoryName } = this.props;
    const { courses } = this.state;

    return (
      <View style={style.container}>
        <Text style={style.text}>{categoryName}</Text>
        <CourseList items={courses}/>
      </View>
    );
  }
}

export default CategoryListItem;