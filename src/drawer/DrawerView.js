import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { View, Text, Thumbnail, Icon } from 'native-base';
import { TEAL, WHITE, FONT_LARGE, GREY, LIGHT_GREY } from '../theme';

const style = StyleSheet.create({
  scrollView: {
    backgroundColor: TEAL,
  },
  container: {
    flex: 1,
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  viewHeaderThumbnail: {
    flex: 0.3,
    alignItems: 'center',
  },
  viewHeaderFullName: {
    flex: 0.7,
    alignItems: 'flex-start',
  },
  textFullName: {
    color: WHITE,
    fontWeight: '500',
    fontSize: FONT_LARGE,
  },
  icon: {
    color: 'white',
  },
  labelStyle: {
    color: WHITE,
  },
  activeLabelStyle: {
    opacity: 1,
  },
  inactiveLabelStyle: {
    opacity: 0.62,
  },
});

export const getDrawerView = iconMapper => (
  class DrawerView extends React.PureComponent {
    renderIcon = (scene) => (
      <Icon
        style={style.icon}
        name={iconMapper[scene.route.key].name}
        type={iconMapper[scene.route.key].type}
      />
    );
    
    handleLogOut = () => {
      // TODO: Implement logic to handle logout here
      this.props.navigation.navigate('Auth')
    };

    handleItemPress = scene => {
      const routeName = scene.route.routeName;
      if (routeName === 'Logout') {
        this.handleLogOut()
      } else {
        this.props.navigation.navigate(scene.route.routeName)
      }
    };

    render() {
      const image = 'https://t0.rbxcdn.com/ecd6d000a1d89d43ecb84f7c71851504';
      const firstName = 'Jax';
      const lastName = 'Teller';

      return (
        <ScrollView style={style.scrollView}>
          <SafeAreaView style={style.container}>
            <View style={style.viewHeader}>
              <View style={style.viewHeaderThumbnail}>
                <Thumbnail source={{uri: image}} />
              </View>
              <View style={style.viewHeaderFullName}>
                <Text style={style.textFullName}>{firstName} {lastName}</Text>
              </View>
            </View>
            <DrawerItems
              {...this.props}
              activeBackgroundColor='#6ed9e6'
              labelStyle={style.labelStyle}
              activeLabelStyle={style.activeLabelStyle}
              inactiveLabelStyle={style.inactiveLabelStyle}
              renderIcon={this.renderIcon}
              onItemPress={this.handleItemPress}
            />
          </SafeAreaView>
        </ScrollView>
      );
    }
  }
)