import React from 'react';
import ReactDOM from 'react-dom';

import SignIn from './components/SignIn';


const App = () => {
  return (
    <>
      <SignIn />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
