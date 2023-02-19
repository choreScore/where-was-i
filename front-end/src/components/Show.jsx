import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import '../styles/Show.css';
import Update from './Update';
import Delete from './Delete';

function Show({
  currentView,
  showname,
  progress,
  login,
  singleShowId,
  showImage,
}) {
  const [progressButton, setProgressButton] = useState(false);
  const [deleteButton, setDeleteButton] = useState(false);

  let progressText = 'Season ' + progress[0] + ', ' + 'Episode ' + progress[1];

  function handleProgressBtn(e) {
    e.preventDefault();
    setProgressButton(true);
  }

  function handleDeleteBtn(e) {
    e.preventDefault();
    setDeleteButton(true);
  }

  if (progressButton === true) {
    return (
      <Update
        progressButton={progressButton}
        setProgressButton={setProgressButton}
        showname={showname}
        login={login}
        progress={progress}
        singleShowId={singleShowId}
        showImage={showImage}
      />
    );
  } else if (deleteButton === true) {
    return (
      <Delete
        deleteButton={deleteButton}
        setDeleteButton={setDeleteButton}
        showname={showname}
        login={login}
        singleShowId={singleShowId}
      />
    );
  } else {
    return (
      <div className='single-show'>
        <div className='single-show-container'>
          <div className='image' style={{ background: `url(${showImage})` }} />
          <div className='show-text-container'>
            <div className='show-text'>
              <h1>{showname}</h1>
              <h2>Progress:</h2>
              <h3>{progressText}</h3>
            </div>
            <div className='update-progress-buttons'>
              <button onClick={handleProgressBtn}>Update Progress</button>
              <button onClick={handleDeleteBtn}>Delete Show</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
