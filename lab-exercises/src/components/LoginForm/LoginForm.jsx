import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserContext';
import { MyThemeContext } from '../../Context/MyThemeContext';

const LoginForm = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [submitResult, setSubmitResult] = useState('');
  const [attemptsCount, setAttemptsCount] = useState(0);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const { theme } = useContext(MyThemeContext);
  const { currentUser, handleUpdateUser } = useContext(UserContext) || {}; 

  const maxAttempts = 3;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (attemptsCount >= maxAttempts) return;

    if (userPassword === userEmail) {
      setSubmitResult('Password must not match email address');
    } else if (userPassword.length < 8) {
      setSubmitResult('Password must be at least 8 characters long');
    } else if (!/\d/.test(userPassword)) {
      setSubmitResult('Password must contain a number');
    } else {
      setSubmitResult('Login Successful!');
      handleUpdateUser?.({ email: userEmail });
      setLoggedIn(true);
      return;
    }

    setAttemptsCount(prev => prev + 1);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    handleUpdateUser?.({});
    setSubmitResult('Logged Out Successfully');
  };

  if ((isLoggedIn && currentUser?.email) || attemptsCount >= maxAttempts) {
    return (
      <div>
        <p>
          {isLoggedIn ? (
            <>
              <p>{`Welcome ${currentUser?.email}!`}</p>
              <p>{submitResult}</p>
              <button onClick={handleLogOut}>Log Out</button>
            </>
          ) : (
            'Too many failed login attempts. Try again later.'
          )}
        </p>
      </div>
    );
  }

  return (
    <div className='LoginForm componentBox' style={{ background: theme.background, color: theme.foreground }}>
      <form onSubmit={handleSubmit}>
        <div className='formRow'>
          <label>Email Address:
            <input 
              type='email' 
              value={userEmail} 
              onChange={e => setUserEmail(e.target.value)} 
              disabled={attemptsCount >= maxAttempts} 
            />
          </label>
        </div>
        <div className='formRow'>
          <label>Password:
            <input 
              type='password' 
              value={userPassword} 
              onChange={e => setUserPassword(e.target.value)} 
              disabled={attemptsCount >= maxAttempts} 
            />
          </label>
        </div>
        <button type="submit" disabled={attemptsCount >= maxAttempts}>Log In</button>
      </form>
      <div>
        <p>{submitResult}</p>
        <p>{`Attempts: ${attemptsCount} of ${maxAttempts}`}</p>
      </div>
    </div>
  );
};

export default LoginForm;