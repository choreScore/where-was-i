import { useState, useEffect } from 'react';

function Navbar({ setLogin, homeButtonHandler, addShowHandler }) {
  async function handlerLogout() {
    setLogin('false');
    localStorage.setItem('user_id', 'false');
  }

  return (
    <div className="navbar-container">
      <div className="header">
        <h1>Where Was I?</h1>
        <div className="buttons">
          <button onClick={homeButtonHandler}>Home</button>
          <button onClick={addShowHandler}>Add Show</button>
          <button onClick={handlerLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
