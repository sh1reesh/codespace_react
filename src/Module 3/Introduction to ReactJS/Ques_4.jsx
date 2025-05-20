// JSX Rules
// Description: Identify and correct errors in incorrect JSX syntax.

import React from 'react';

function Error() {
  return (
    <div>
      <h1>Unclosed tag</h1>
      <p>Self-closing tag example <img src="example.png" alt="Example" /></p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    </div>
  );
}

export default Error;
