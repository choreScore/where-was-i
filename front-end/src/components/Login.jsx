import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import '../styles/Login.css';
const firebase = require('firebase/app');
const fire = require('firebase/auth');

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBdo-9REbvNterk3UIMaAJhvd35BK2v0ls',
  authDomain: 'where-was-i-426bb.firebaseapp.com',
  projectId: 'where-was-i-426bb',
  storageBucket: 'where-was-i-426bb.appspot.com',
  messagingSenderId: '236551239143',
  appId: '1:236551239143:web:406264d0b12a3428fc7942',
});
const auth = fire.getAuth(app);
//getUserId from Firebase and pass to App

function Login(props) {
  const [loginEmail, setloginEmail] = useState('');
  const [loginPassword, setloginPassword] = useState('');
  const [loginUsername, setloginUsername] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [createUsername, setCreateUsername] = useState('');

  function createUser(e) {
    e.preventDefault();
    fire
      .createUserWithEmailAndPassword(auth, loginEmail, createPassword)
      .then(async (userCredential) => {
        var user = userCredential.user;
        const checkstat = await fetch('http://localhost:4000/user', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            auth_token: user.uid,
            username: createUsername,
            email: user.email,
          }),
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage);
      });
    const node = document.getElementsByClassName('user1');
    node[0].value = '';
    node[1].value = '';
    node[2].value = '';
    setCreatePassword('');
    setloginEmail('');
    setCreateUsername('');
    window.alert('you can login');
  }

  async function loginUser(e) {
    e.preventDefault();
    let email = await fetch(
      `http://localhost:4000/user?username=${loginUsername}`
    );
    let data = await email.json();
    fire
      .signInWithEmailAndPassword(auth, data[0].email, loginPassword)
      .then((userCredential) => {
        var user = userCredential.user.uid;
        props.setLogin(data[0].user_id);
        localStorage.setItem('user_id', data[0].user_id);
        props.setCurrentView('Homepage');
        props.setUserInfo({
          username: data[0].username,
          email: data[0].email,
          user_id: data[0].user_id,
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        window.alert('dont forget your password!!!');
      });
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(loginEmail);
  //   console.log(loginPassword)
  //   setLogin(true);
  //   props.setCurrentView("Homepage");
  // }

  if (props.login === 'false') {
    return (
      <div className='form-section'>
        <div className='login'>
          <div className='image-container'>
            <img src={require('../images/background.png')} alt='' />
          </div>
          <div className='login-container'>
            <div className='login-title'>
              <h2>Where Was I?</h2>
              <h3>Welcome back!</h3>
            </div>
            <form onSubmit={createUser} className='form-login'>
              <div className='labels'>
                <label for='login'>username</label>
                <input
                  className='user1'
                  placeholder='Username'
                  type='text'
                  name='login'
                  value={createUsername}
                  onChange={(event) => setCreateUsername(event.target.value)}
                />
                <br></br>
                <label for='login'> Email:</label>
                <input
                  className='user1'
                  placeholder='Email'
                  type='text'
                  name='login'
                  value={loginEmail}
                  onChange={(event) => setloginEmail(event.target.value)}
                />
                <br></br>
                <label for='password'>Password:</label>
                <input
                  className='user1'
                  placeholder='Password'
                  type='password'
                  name='password'
                  value={createPassword}
                  onChange={(event) => setCreatePassword(event.target.value)}
                />
              </div>
              <div className='login-button'>
                <button type='submit'>signup</button>
              </div>
            </form>
            <form onSubmit={loginUser} className='form-login'>
              <div className='labels'>
                <label for='login'>username</label>
                <input
                  placeholder='Username'
                  type='text'
                  name='login'
                  value={loginUsername}
                  onChange={(event) => setloginUsername(event.target.value)}
                />
                <br></br>
                <label for='password'>Password:</label>
                <input
                  placeholder='Password'
                  type='password'
                  name='password'
                  value={loginPassword}
                  onChange={(event) => setloginPassword(event.target.value)}
                />
              </div>
              <div className='login-button'>
                <button type='submit'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
