import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import { fadeIn } from '../../styles/animation';

export const Nav = styled.nav`
  margin: 0 auto;
  max-width: 500px;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  position: fixed;
  z-index: 2;
`;

export const Link = styled(LinkRouter)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #888;
  text-decoration: none;

  &[aria-current] {
    color: black;

    &:after{
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
      content: '·';
      ${fadeIn({ time: '0.5s' })};
    }
  }
`;
