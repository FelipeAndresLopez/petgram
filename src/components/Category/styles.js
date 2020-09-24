import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Link = styled(LinkRouter)`
  display: flex;
  width: 75px;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
`
export const Image = styled.img`
  width: 75px;
  height: 75px;
  border: 1px solid #ddd;
  box-shadow: 0px 10px  14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;
