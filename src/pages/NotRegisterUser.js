import React, { Fragment, useContext } from 'react';
import { Context } from '../Context';
import UserForm from '../components/UserForm';
import RegisterMutation from '../containers/RegisterMutation';
import LoginMutation from '../containers/LoginMutation';

const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context);
 
  return (
    <Fragment>
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

            const errorMsg = error && 'User already.';

            return (
              <UserForm
                disabled={loading}
                error={errorMsg}
                onSubmit={onSubmit}
                title='Register'
              />
            );
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
                const { login } = data;

                activateAuth(login);
              });
            };

            const errorMsg = error && 'User not already.';

            return (
              <UserForm
                disabled={loading}
                error={errorMsg}
                onSubmit={onSubmit}
                title='Login'
              />
            );
          }
        }
      </LoginMutation>
    </Fragment>
  );
};

export default NotRegisterUser;
