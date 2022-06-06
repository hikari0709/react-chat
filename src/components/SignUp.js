import React from 'react';
import { auth } from '../firebaseConfig';


const SignUp = () => {
  const handleeSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    auth.createUserWithEmailAndPassword(email.value, password.value);
    console.log(email.value, password.value);
  }

  return (
    <>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleeSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name='email' type='email' placeholder='メールアドレス'/>
        </div>
        <div>
          <label>パスワード</label>
          <input name='password' type='password' />
        </div>
        <button>登録</button>
      </form>
    </>
  );
};

export default SignUp;
