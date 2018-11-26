import React from 'react';
import { RefreshControl, StyleSheet } from 'react-native';
import { Icon, Text, Container, Content } from 'native-base';
import theme, {
  SILVER
} from 'Alaska/src/theme';
import CategoryList from './CategoryList';
import CategoryService from '../../../apis/CategoryService';

const style = StyleSheet.create({
  container: {
    backgroundColor: SILVER,
    padding: 10,
  }
});

class FeaturedScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarIcon: ({tintColor}) => (
        <Icon
          name='star'
          type='SimpleLineIcons'
          style={{
            fontSize: theme.tabBar.iconFontSize,
            color: tintColor,
          }}
        />
      )
    };
  }

  state = {
    isLoading: true,
    error: null,
    categories: [],
  }

  categoryService = new CategoryService();

  async componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ isLoading: true });
    this.categoryService.getCategories()
      .then(response => {
        this.setState({
          isLoading: false,
          categories: response.data,
        });    
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          error: 'Something went wrong!'
        });
      });
  }

  onRefresh = () => {
    this.fetchData();
  }

  render() {
    const {
      error,
      isLoading,
      categories,
    } = this.state;

    return (
      <Container style={style.container}>
        <Content
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={this.onRefresh}
            />
          }
        >
          {!isLoading && (
            error ? (
              <Text>{error}</Text>
            ) : (
              <CategoryList items={categories} />
            )
          )}
        </Content>
      </Container>
    );
  }
}

export default FeaturedScreen;