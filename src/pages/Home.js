import React from 'react';

import { Layout } from '../components/Layout';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';

export const Home = ({ categoryId }) => (
  <Layout title="Your pet app" subtitle="Use this app to find photos of domestic animals">
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </Layout>
);
