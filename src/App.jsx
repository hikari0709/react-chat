import React from 'react';
import ReactDOM from 'react-dom';

import SignUp from './components/SignUp';


const App = () => {
  return (
    <>
      <SignUp />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
