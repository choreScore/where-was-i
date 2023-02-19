import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import '../styles/Login.css';
import Swal from 'sweetalert2';
import Signup from './Signup';
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
  const [loginPassword, setloginPassword] = useState('');
  const [loginUsername, setloginUsername] = useState('');
  const [change, setChangeIt]=useState('true');

  
  function changeit(e){
    e.preventDefault();
    setChangeIt('false');
  }
  async function loginUser(e) {
    e.preventDefault();
    let email = await fetch(
      `http://localhost:4000/user?username=${loginUsername}`
    );
    let data = await email.json();
    if(data.length === 0){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `username does not exist`,
      })
    }
    else{
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
  }

  if (props.login === 'false') {
    if(change==='true'){
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
            <div className='login-button'>
                <button className='btn' onClick={(event)=>changeit(event)}>Signup</button>
              </div>
            </div>
          </div>
        </div>
    )}
    if(change === 'false'){
      return( 
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
      <Signup setChangeIt={setChangeIt}/>
      </div>
      </div>
   ) }
  }
}

export default Login;
