import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import '../styles/Login.css';
import Swal from 'sweetalert2';
import Signup from './Signup';
import LoginForm from './LoginForm';
//getUserId from Firebase and pass to App

function Login({ setLogin, setCurrentView, setUserInfo }) {
  const [loginPassword, setloginPassword] = useState('');
  const [loginUsername, setloginUsername] = useState('');
  const [isSignup, setIsSignUp] = useState(false);

  return (
    <div className='login-signup-container'>
      <div className='login-card'>
        <div className='image-login-container'>
          <img src={require('../images/background.png')} alt='' />
        </div>
        <div className='form-login-container'>
          {!isSignup && (
            <LoginForm
              setLogin={setLogin}
              setCurrentView={setCurrentView}
              setUserInfo={setUserInfo}
              loginPassword={loginPassword}
              loginUsername={loginUsername}
              setloginUsername={setloginUsername}
              setloginPassword={setloginPassword}
              setIsSignUp={setIsSignUp}
            />
          )}
          {isSignup && <Signup setIsSignUp={setIsSignUp}/>}
        </div>
      </div>
    </div>
  );
}
/*if (props.login === 'false') {
    if (change === 'true') {
      return (
          
        </div>
      );
    }
    if (change === 'false') {
      return (
        <div className='login-signup-container'>
          <div className='login-card'>
            <div className='image-login-container'>
              <img src={require('../images/background.png')} alt='' />
            </div>

            <div className='form-login-container'>
              <div className='login-title'>
                <h2>Where Was I?</h2>
                <h3>Welcome back!</h3>
              </div>
              <Signup setChangeIt={setChangeIt} />
            </div>
          </div>
        </div>
      );
    }
  }*/

export default Login;
