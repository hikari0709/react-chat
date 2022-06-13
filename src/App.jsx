import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import Main from './components/Main';
import SignIn from './components/SignIn';
import config from './config.json';

const App = () => {
  const [name, setName] = useState('');

  if (config.signInEnabled && name === '') {
    return <SignIn setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
