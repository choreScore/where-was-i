import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Homepage from './Homepage';
import '../styles/Login.css';
const firebase = require('firebase/app');
const fire = require('firebase/auth');


const app = firebase.initializeApp({
  apiKey: "AIzaSyBdo-9REbvNterk3UIMaAJhvd35BK2v0ls",
  authDomain: "where-was-i-426bb.firebaseapp.com",
  projectId: "where-was-i-426bb",
  storageBucket: "where-was-i-426bb.appspot.com",
  messagingSenderId: "236551239143",
  appId: "1:236551239143:web:406264d0b12a3428fc7942"
})
const auth = fire.getAuth(app);
//getUserId from Firebase and pass to App

function Login(props) {
  const [loginEmail, setloginEmail] = useState('');
  const [loginPassword, setloginPassword] = useState('');
  const [loginUsername, setloginUsername] = useState('');
  

  function createUser(e) {
    
    e.preventDefault();
    console.log(loginEmail, loginPassword, loginUsername);
    console.log("JHSDKAHSDKJASHDKJHASDKJHDSJKAHDKJDSH11111");
    fire
      .createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(async (userCredential) => {
        var user = userCredential.user;
        console.log(user);
        const checkstat = await fetch('http://localhost:4000/user',
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({auth_token: user.uid, username: loginUsername, email:user.email})
        })
    

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
       console.log(errorMessage);
      });
  }
  
  async function loginUser(e){
  e.preventDefault();
   let email = await fetch(`http://localhost:4000/user?username=${loginUsername}`)

    fire.signInWithEmailAndPassword(auth,email.email, loginPassword)
  .then((userCredential) => {
    var user = userCredential.user.uid;
    console.log(user);
    props.setLogin(user);
    props.setCurrentView("Homepage");

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }
 let login = props.login;
 const setLogin = props.setLogin;

 // function handleSubmit(e) {
 //   e.preventDefault();
 //   console.log(loginEmail);
 //   console.log(loginPassword)
 //   setLogin(true);
 //   props.setCurrentView("Homepage");
 // }



  if (login === false) {
    return (
      <div className="login-signup-container">
        <div className="slider"></div>
        <div className="slider-button">
          <button className="slider-login">Login</button>
          <button className="slider-signup">Signup</button>
        </div>

        <div className="form-section">
          <div className="login">
            <div className="image-container">
              <img
                src={require("/Users/rebeccaweeks/Desktop/Immersive/Week 5/where-was-i/front-end/src/test-image/background.png")}
                alt=""
              />
            </div>
            <div className="login-container">
              <div className="login-title">
                <h2>Where Was I?</h2>
                <h3>Welcome back!</h3>
              </div>
              <form onSubmit={createUser} className="form-login">
                <div className="labels">
                  <label for="login">username</label>
                  <input
                    placeholder="Username"
                    type="text"
                    name="login"
                    value={loginUsername}
                    onChange={(event)=>setloginUsername(event.target.value)}
                  />
                  <br></br>
                  <label for="login"> Email:</label>
                  <input
                    placeholder="Email"
                    type="text"
                    name="login"
                    value={loginEmail}
                    onChange={(event)=>setloginEmail(event.target.value)}
                  />
                  <br></br>
                  <label for="password">Password:</label>
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={loginPassword}
                    onChange={(event)=>setloginPassword(event.target.value)}
                  />
                </div>
                <div className="login-button">
                  <button type="submit">signup</button>
                </div>
              </form>
              <form onSubmit={loginUser} className="form-login">
                <div className="labels">
                  <label for="login">username</label>
                  <input
                    placeholder="Username"
                    type="text"
                    name="login"
                    value={loginUsername}
                    onChange={(event)=>setloginUsername(event.target.value)}
                  />
                  <br></br>
                  <label for="password">Password:</label>
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={loginPassword}
                    onChange={(event)=>setloginPassword(event.target.value)}
                  />
                </div>
                <div className="login-button">
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login