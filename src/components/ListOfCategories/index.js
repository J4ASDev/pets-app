import React from 'react';
import { List, Item } from './styles';
import Category from '../Category';

import { categories } from '../../../api/db';

const ListOfCategories = () => (
  <List>
    { categories.map(category =>
      <Item key={category.id}> <Category {...category} /> </Item>
    )}
  </List>
);

export default ListOfCategories;
