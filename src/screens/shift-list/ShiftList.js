import React from 'react';
import { FlatList } from 'react-native';
import ShiftListItem from './ShiftListItem';

class ShiftList extends React.PureComponent {
  keyExtractor = (item, index) => `${index}`;

  renderItem = ({item}) => <ShiftListItem {...item} />;

  render() {
    const { items } = this.props;

    return (
      <FlatList
        data={items}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

export default ShiftList;