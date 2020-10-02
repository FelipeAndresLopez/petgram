import React, { useContext } from 'react';
import { Context } from '../Context';

import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <>
      <RegisterMutation>
        {
          (register, { loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password };
              const variables = { input };
              register({ variables }).then(({ data }) => {
                const { signup } = data;
                activateAuth(signup);
              });
            };

            const errorMsk = error && 'User already exist or there was an server error.';
            return <UserForm disabled={loading} error={errorMsk} onSubmit={onSubmit} title="Sign up" />;
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password };
              const variables = { input };
              login({ variables }).then(({ data }) => {
                const { login: token } = data;
                activateAuth(token);
              });
            };
            const errorMsk = error && 'User name or password is invalid or user does not exist.';
            return <UserForm disabled={loading} error={errorMsk} onSubmit={onSubmit} title="Sign in" />
          }
        }
      </LoginMutation>
    </>
  );
};
