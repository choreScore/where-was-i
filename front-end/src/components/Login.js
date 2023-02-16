import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Homepage from './Homepage';
import '../styles/Login.css'


//getUserId from Firebase and pass to App

function Login(props){
  let login = props.login
  const setLogin = props.setLogin;

    function handleSubmit(e){
      e.preventDefault();
      setLogin(true);
      props.setCurrentView('Homepage')
    }

    if (login === false){
    return (
      <div className='login'>
        <div className='image-container'>
          <img src={require('/Users/rebeccaweeks/Desktop/Immersive/Week 5/where-was-i/front-end/src/test-image/background.png')} alt=""/>
        </div>
        <div className='login-container'>
          <div className='login-title'>
            <h2>Where Was I?</h2>
            <h3>Welcome back!</h3>
          </div>
          <form onSubmit={handleSubmit} className="form-login">
          <div className='labels'>
          <label for='login'>Username or Email:</label>
            <input
              placeholder='Username or Email'
              type='text'
              name='login' />
          <br></br>
          <label for='password'>Password:</label>
            <input
              placeholder='Password'
              type='password'
              name='password' />
            </div>
            <div className='login-button'>
              <button type='submit'>Login</button>
          </div>
        </form>



        </div>
       
      </div>
    )
  }
}

export default Login