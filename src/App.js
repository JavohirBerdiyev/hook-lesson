import React from 'react';
import './App.css';
import Form2 from './Form/Form2';
import UsersEffectHook from './UsersEffectHook/UsersEffectHook';

function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <div className='w-50'>
        <Form2 />
      </div>
      <UsersEffectHook />
    </div>
  );
}

export default App;
