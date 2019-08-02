import React, { Fragment, useContext } from 'react';
import { Context } from '../Context';
import SubmitButton from '../components/SubmitButton';

const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <Fragment>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>LogOut</SubmitButton>
    </Fragment>
  );
};

export default User;
