import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import SignIn from './components/SignIn';


const App = () => {
  const [name, setName] = useState('');
  console.log({ name });

  return (
    <>
      <SignIn setName={setName}/>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
