import React from 'react';

import { Layout } from '../components/Layout';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';

const HomePage = ({ categoryId }) => (
  <Layout title="Your pet app" subtitle="Use this app to find photos of domestic animals">
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </Layout>
);

export const Home = React.memo(
  HomePage, (prevProps, props) => prevProps.categoryId === props.categoryId
);
