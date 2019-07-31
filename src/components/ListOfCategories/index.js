import React, { Fragment, useState, useEffect } from 'react';
import { List, Item } from './styles';
import Category from '../Category';

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://petgram-server.midudev.now.sh/categories')
      .then(response => response.json())
      .then(response => {
        setCategories(response);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
};

const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed,  setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;

      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  });

  const renderList = fixed => (
    <List fixed={fixed}>
      { loading ? (
          <Item key='loading'> <Category /> </Item>
        ) : (
          categories.map(category => (
            <Item key={category.id}> <Category {...category} /> </Item>
          ))
        )
      }
    </List>
  );

  return (
    <Fragment>
      { renderList() }
      { showFixed && renderList(true) }
    </Fragment>
  );
};

export default ListOfCategories;
