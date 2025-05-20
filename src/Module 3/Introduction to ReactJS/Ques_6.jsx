// Conditional Rendering
// Description: Implement a component that renders different messages based on a passed isLoggedIn prop.

// Step 1: Write your code within the file, by the name of component as LoginMessage
// Step 2: Modify the App.js to use LoginMessage with a boolean prop

import React from 'react';

function LoginMessage({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>}
    </div>
  );
}

export default LoginMessage;