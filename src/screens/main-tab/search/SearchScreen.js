import React from 'react';

import { 
  Container, 
  Header,
  Content,
  Icon,
  Spinner,
} from 'native-base';

import CourseService from 'Alaska/src/apis/CourseService';
import SearchBar from 'Alaska/src/common/components/SearchBar';
import CourseList from './CourseList';
import theme from 'Alaska/src/theme';

class SearchScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarIcon: ({tintColor}) => (
        <Icon 
          name='search' 
          type='Octicons' 
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
    courses: [],
  }

  courseService = new CourseService();

  fetchData = async () => {
    const response = await this.courseService.getCourses();
    this.setState({ courses: response.data });
  }

  render() {
    const { 
      courses,
      isLoading
    } = this.state;

    return (
      <Container>
        <Header>
          <SearchBar onSubmitEditing={this.fetchData} />
        </Header>
        <Content>
          {isLoading && (
            <Spinner />
          )}
          <CourseList 
            courses={courses}
          />
        </Content>
      </Container>
    );
  }
}

export default SearchScreen;