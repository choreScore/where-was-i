import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import '../styles/Show.css';
import Update from './Update'

function Show(props) {
  const [progressButton, setProgressButton] = useState(false);
  const [deleteButton, setDeleteButton] = useState(false);
  
  function handleProgressBtn(e){
    e.preventDefault();
    setProgressButton(true);
  }

  if (progressButton === false && deleteButton === false){
    return (
      <div className="single-show">
        <div className="single-show-container">
          <div className="show-image-container">
            <img src={require('../test-image/sopranos.jpg')} />
          </div>
  
          <div className="show-text-container">
            <div className="show-text">
              <h1>TV Show Name</h1>
              <h2>Progress:</h2>
              <h3>Season 1, Episode 4</h3>
            </div>
            <div className="update-progress-buttons">
              <button onClick={handleProgressBtn}>Update Progress</button>
              <button>Delete Show</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

else if (progressButton === true){
  return (
    <Update
      progressButton={progressButton}
      setProgressButton={setProgressButton}/>
  )
}
}



export default Show;
  

  




  