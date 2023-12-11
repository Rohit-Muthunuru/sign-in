// App.js
import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignUp = (userData) => {

    console.log('Sign up:', userData);

    setUser(userData);

  };

  const handleSignIn = (userData) => {

    console.log('Sign in:', userData);


    setUser(userData);
  };

  return (
    <div style={{ background: "#87CEEB" }} >
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
        </div>
      ) : (
        <div>
          <SignUp onSignUp={handleSignUp} />
          <SignIn onSignIn={handleSignIn} />
        </div>
      )}
    </div>
  );
};

export default App;
