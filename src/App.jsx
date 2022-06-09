import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';
import SignIn from './components/SignIn';
import config from './config.json';
console.log(config);

const App = () => {
  const [name, setName] = useState('');
  console.log({ name });

  if (config.signInEnabled && name === '') {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
ReactDOM.render(<App />, document.getElementById('app'));
