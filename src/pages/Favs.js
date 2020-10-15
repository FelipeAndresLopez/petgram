import React from 'react';

import { Layout } from '../components/Layout';
import { FavsWithQuery } from '../container/GetFavorites';

export default () => (
  <Layout title="Your favorites" subtitle="Here you can find your favorites">
    <FavsWithQuery />
  </Layout>
);
