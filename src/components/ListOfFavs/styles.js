import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Link = styled(LinkRouter)`
  width: 31.33%;
  display: inline-block;
  margin: 1%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  &:after {
    display: block;
    padding-bottom: 100%;
    content: '';
  }
`;

export const Grid = styled.div`
  padding-top: 32px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`;
