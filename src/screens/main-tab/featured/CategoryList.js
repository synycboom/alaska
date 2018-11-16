import React from 'react';
import CategoryListItem from './CategoryListItem';

class CategoryList extends React.PureComponent {
  render() {
    return this.props.items.map((item, index) => (
      <CategoryListItem 
        categoryId={item.id} 
        categoryName={item.name} 
        key={index}/>
      )
    );
  }
}

export default CategoryList;