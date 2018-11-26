import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  View,
  Text,
  Container,
  Header,
  Content,
  Icon,
  Spinner,
} from 'native-base';

import { 
  RED, 
  FONT_X_LARGE 
} from '../../../theme';

import CourseService from 'Alaska/src/apis/CourseService';
import SearchBar from 'Alaska/src/common/components/SearchBar';
import MyCourseList from './MyCourseList';
import theme from 'Alaska/src/theme';

const styles = StyleSheet.create({
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: FONT_X_LARGE,
    color: RED,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  iconSearch: {
    color: RED,
  }
});

class MyCoursesScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarIcon: ({tintColor}) => (
        <Icon
          name='play-circle'
          type='Feather'
          style={{
            fontSize: theme.tabBar.iconFontSize,
            color: tintColor,
          }}
        />
      )
    };
  }

  state = {
    isLoading: false,
    isSearchEnabled: false,
    courses: [],
  };

  courseService = new CourseService();

  fetchData = async () => {
    const response = await this.courseService.getMyCourses();
    this.setState({ courses: response.data });
  }

  handleEnableSearch = () => {
    this.setState({ isSearchEnabled: true }, () => {
      this.searchBarRef.focus();
    });
  }

  handleCancel = () => {
    this.setState({ isSearchEnabled: false });
  }

  render() {
    const {
      courses,
      isLoading,
      isSearchEnabled,
    } = this.state;

    return (
      <Container>
        <Header>
          {isSearchEnabled ? (
            <SearchBar 
              onSubmitEditing={this.fetchData}
              onCancel={this.handleCancel}
              ref={ref => this.searchBarRef = ref}
            />
          ) : (
            <View style={styles.viewHeader}>
              <Text style={styles.textHeader}>My Courses</Text>
              <TouchableOpacity onPress={this.handleEnableSearch}>
                <Icon style={styles.iconSearch} name='ios-search'/>
              </TouchableOpacity>
            </View>
          )}
        </Header>
        <Content>
          {isLoading && (
            <Spinner />
          )}
          <MyCourseList
            courses={courses}
          />
        </Content>
      </Container>
    );
  }
}

export default MyCoursesScreen;