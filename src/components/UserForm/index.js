import React, { useState } from 'react';
const useInputValue = (initialValue) => {

}

export const UserForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign in</button>
    </form>
  );
};
