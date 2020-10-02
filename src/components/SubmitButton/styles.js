import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 32px;
  color: #fff;
  text-align: center;
  background-color: #8d00ff;
  border-radius: 3px;
  &[disabled] {
    opacity: .3;
  }
`;
