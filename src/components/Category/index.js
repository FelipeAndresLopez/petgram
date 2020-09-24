import React from 'react';
import { Link, Image } from './styles';

const DEFAILT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAILT_IMAGE, path = '#', emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} alt="" />
    {emoji}
  </Link>
);
