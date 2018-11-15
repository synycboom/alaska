import React from 'react';
import { FlatList } from 'react-native';
import { View } from 'native-base';
import MemberListItem from './MemberListItem';

class MemberList extends React.PureComponent {
  keyExtractor = item => `${item.id}`;

  renderItem = ({item}) => (
    <MemberListItem
        imageSource={item.image}
        name={item.name}
        isInCharge={item.isInCharge}
    />
  );

  render() {
    const { members } = this.props;
    
    return (
      <View>
        <FlatList 
          data={members}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default MemberList;