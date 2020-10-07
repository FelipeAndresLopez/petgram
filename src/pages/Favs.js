import React from 'react';

import { Layout } from '../components/Layout';
import { FavsWithQuery } from '../container/GetFavorites';

export const Favs = () => (
  <Layout title="Your favorites" subtitle="Here you can find your favorites">
    <FavsWithQuery />
  </Layout>
);
