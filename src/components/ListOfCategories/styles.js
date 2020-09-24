import styled, { css } from 'styled-components';

export const List = styled.ul`
  display: flex;
  width: 100%;
  overflow: scroll;  
${(props) => props.fixed && css`

    max-width: 400px;
    margin: 0 auto;
    padding: 5px;
    position: fixed;
    left: 0;
    right: 0;
    top: -20px;
    background-color: white;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0,  0, 0.3);
    transform: scale(.5);
    z-index: 1;

`}`;

export const Item = styled.li`
  padding: 0 8px;
`;
