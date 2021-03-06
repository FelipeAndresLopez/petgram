import React, { useContext } from 'react';
import { SubmitButton } from '../components/SubmitButton';
import { Context } from '../Context';

export const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <>
      <h1>User</h1>
      <SubmitButton type="button" onClick={removeAuth}>Log out</SubmitButton>
    </>
  );
};
