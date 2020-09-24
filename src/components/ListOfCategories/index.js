import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

function useCategoryData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const response = await fetch('https://petgram-server-felipe.felipeandreslopez.vercel.app/categories');
      setCategories(await response.json());
      setLoading(false);
    })();
  }, []);

  return { categories, loading };
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoryData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const newScrollFixed = window.scrollY > 200;
      if (showFixed !== newScrollFixed) setShowFixed(newScrollFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  });

  const renderList = (fixed) => (

    <List fixed={fixed}>
      {loading ? <Item key="loading"><Category /></Item>
        : categories.map((category) => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
