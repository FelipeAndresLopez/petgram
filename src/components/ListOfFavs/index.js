import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Image, Link } from './styles';

export const ListOfFavs = ({ favs = [] }) => (
  <Grid>
    {
      favs.map((fav) => (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image key={fav.id} src={fav.src} alt="Favorite" />
        </Link>
      ))
    }
  </Grid>
);

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.bool.isRequired
    })
  ).isRequired
};
