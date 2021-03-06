import styled from 'styled-components';

export const Form = styled.form`
  padding: 16px 0;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px 4px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  &[disabled] {
    opacity: .3;
  }
`;

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

export const Title = styled.h2`
  padding: 8px 0;
  font-size: 16px;
  font-weight: 500;
`;

export const Error = styled.span`
  color: red;
  font-size: 14px;
`;
