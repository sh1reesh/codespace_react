// Passing Props to Components
// Description: Create a Profile component that receives name and age as props and displays them.

// Step 1: Write your code within the file, by the name of component as Profile
// Step 2: Update App.js to pass props to the Profile component



import React from 'react';

function Profile(props) {
  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Profile;