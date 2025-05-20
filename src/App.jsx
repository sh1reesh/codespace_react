import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Module 4/Redux Toolkit - State Management in React/Counter_Redux/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Toolkit Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;