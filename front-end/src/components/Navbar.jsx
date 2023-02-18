import { useState, useEffect } from 'react';
import '../styles/Navbar.css';



function Navbar({ setLogin, homeButtonHandler, addShowHandler }) {
  async function handlerLogout() {
    setLogin('false');
    localStorage.setItem('user_id', 'false');
  }

  return (
    <div className="navbar-container">
      <div className="header">
      <h1>Where Was I?</h1>
      </div>
        <ul>
          <li><button onClick={handlerLogout}>Logout</button></li>
          <li><button onClick={addShowHandler}>Add Show</button></li>
          <li><button onClick={homeButtonHandler}>Home</button></li>
        </ul>
    </div>
  );
}

export default Navbar;
