import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import Homepage from './Homepage';
import '../styles/Login.css';
import Swal from 'sweetalert2'
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
    let check = true;
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
        }).then(
          Swal.fire('Good job your account was created you can login'))  
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${errorMessage}`,
        })
      });
    const node = document.getElementsByClassName('user1');
    node[0].value = '';
    node[1].value = '';
    node[2].value = '';
    setCreatePassword('');
    setloginEmail('');
    setCreateUsername('');
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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${errorMessage}`,
        })
      });
  }

  if (props.login === 'false') {
    return (
      <div className='login-signup-container'>

        <div className='image-container'>
          <img src={require('../images/background.png')} alt='' />
        </div>

        <div className='form-container'>
          <div className='login-title'>
            <h2>Where Was I?</h2>
            <h3>Welcome back!
        
            </h3>
          </div>

          <div className='signup-container'>
            <form onSubmit={createUser} className='form-signup'>
              <label for='username'><FontAwesomeIcon icon={faUser}/></label>
              <input
                className='user1'
                placeholder='Username'
                type='text'
                name='username'
                value={createUsername}
                onChange={(event) => setCreateUsername(event.target.value)}
              />
              <br></br>

              <label for='email'> <FontAwesomeIcon icon={faEnvelope}/></label>
              <input
                className='user1'
                placeholder='Email'
                type='text'
                name='email'
                value={loginEmail}
                onChange={(event) => setloginEmail(event.target.value)}
              />
              <br></br>

              <label for='password'><FontAwesomeIcon icon={faLock}/></label>
              <input
                className='user1'
                placeholder='Password'
                type='password'
                name='password'
                value={createPassword}
                onChange={(event) => setCreatePassword(event.target.value)}
              />


              <div className='signup-button'>
                <button type='submit'>Signup</button>
              </div>

            </form>
            </div>

            <div className='login-container'>
            <form onSubmit={loginUser} className='form-login'>
                <label for='username'><FontAwesomeIcon icon={faUser}/></label>
                <input
                  placeholder='Username'
                  type='text'
                  name='username'
                  value={loginUsername}
                  onChange={(event) => setloginUsername(event.target.value)}
                />
                <br></br>
                <label for='password'><FontAwesomeIcon icon={faLock}/></label>
                <input
                  placeholder='Password'
                  type='password'
                  name='password'
                  value={loginPassword}
                  onChange={(event) => setloginPassword(event.target.value)}
                />

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
