import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const handleChangeText = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleRegisterSubmit = () => {
    const { email, password } = state;
    console.log('data before send: ', email, password)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      console.log('success: ', res);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  };

  return (
    <div>
      <p>silahkan regristrasi akun anda terlebih dahulu</p>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="masukkan email" id="email" onChange={handleChangeText}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="masukkan password" id="password" onChange={handleChangeText}/>
      </div>
      <button onClick={handleRegisterSubmit}>registrasi</button>
    </div>
  );
};

export default Register;