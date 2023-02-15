import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import User from './User';


function Login(){
  const navigate = useNavigate();

  const exampleData = [
    {
      userId: 1,
      username: 'tarantino',
      showname: 'Sopranos',
      show_id: 1
    },
    {
      userId: 1,
      username: 'tarantino',
      showname: 'Breaking Bad',
      show_id: 2
    },
    {
      userId: 1,
      username: 'tarantino',
      showname: 'The Offer',
      show_id: 3
    },
    { userId: 1, username: 'tarantino', showname: 'Fargo', show_id: 4 },
    {
      userId: 1,
      username: 'tarantino',
      showname: 'True Detective',
      show_id: 5
    }
  ];

  // async function getAllShows(){
  //  await fetch('http://localhost:3000/user') //URL
  //     .then((response) => response.json())
  //     .then((result) => setAllShows(result))
  //     .catch((error) => console.log(error))

    function handleSubmit(e){
      e.preventdefault();
      // getAllShows();
      navigate('/user');
    }
    return (
    <div className='login'>

            <div className="login-header">
            <h1>Where Was I?</h1>
            </div>
            <div className = "card">
              <h3>Login</h3>
              <form onSubmit={handleSubmit}>
                <label>
                  Email or username
                <input
                  type='text'
                  placeholder='Enter username or email' />
                </label>
                <br></br>
    
                <label>
                  Password
                <input 
                  type='password'
                  placeholder='Enter password' />
                </label>
                <br></br>
    
                <button type='submit'>Login
                  </button>
              </form>       
            </div>
            <User exampleData={exampleData} />
    </div>
    )
}

export default Login