import { useState, useEffect } from 'react';

function Navbar({ homeButtonHandler }) {
  async function handlerHome() {}

  async function handlerAddShow() {}

  async function handlerDeleteShow() {}

  async function handlerLogout() {}

  return (
    <div className="navbar-container">
      <div className="header">
        <h1>Where Was I?</h1>
        <div className="buttons">
          <button onClick={homeButtonHandler}>Home</button>
          <button>Add Show</button>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

export default Navbar
