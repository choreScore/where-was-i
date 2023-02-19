import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar({ setLogin, homeButtonHandler, addShowHandler }) {
  async function handlerLogout() {
    setLogin('false');
    localStorage.setItem('user_id', 'false');
  }

  return (
    <div className='navbar-container'>
      <div className='header' onClick={homeButtonHandler}>
        <h1>Where Was I?</h1>
      </div>
      <ul>
        <li>
          <button onClick={handlerLogout} className='btn'>Logout</button>
        </li>
        <li>
          <button onClick={addShowHandler} className='btn'>Add Show</button>
        </li>
        <li>
          <button onClick={homeButtonHandler} className='btn'>Home</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
