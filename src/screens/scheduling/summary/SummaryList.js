import React from 'react';
import { FlatList } from 'react-native';
import SummaryListItem from './SummaryListItem'

class SummaryList extends React.PureComponent {
  keyExtractor = (item, index) => `${index}`;

  renderItem = ({item}) => (
    <SummaryListItem
      textTopLeft={item.title}
      textTopRight={item.total}
      textBottomLeft={item.detail}
      textBottomRight={item.price}
    />
  );

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

export default SummaryList;