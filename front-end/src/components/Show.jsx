import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import '../styles/Show.css';
import Update from './Update';
import Delete from './Delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

function Show({
  currentView,
  showname,
  progress,
  login,
  singleShowId,
  showImage,
  setCurrentView,
}) {
  const [progressButton, setProgressButton] = useState(false);
  const [deleteButton, setDeleteButton] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  let progressText = 'Season ' + progress[0] + ', ' + 'Episode ' + progress[1];

  useEffect(() => {
    getShowInfo(singleShowId);
  }, []);

  async function getShowInfo(showId) {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${showId}?api_key=22232a34b1256a41ee95dfdb04aa1810`
    ).then((data) => data.json());
    setShowInfo(data);
  }

  function handleProgressBtn(e) {
    e.preventDefault();
    setProgressButton(true);
  }

  function handleDeleteBtn(e) {
    e.preventDefault();
    setDeleteButton(true);
  }

  function closeButton() {
    setCurrentView('Homepage');
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
      />
    );
  } else {
    return (
      <div className='single-show'>
        <div className='single-container'>
          <div className='images-container'>
            <img src={showImage} alt='' />
          </div>
          <div className='info-container'>
            <FontAwesomeIcon
              icon={faXmarkCircle}
              className='icon-button'
              onClick={closeButton}
            />
            <div className='show-text-container'>
              <h1>{showname}</h1>
              <h2>Progress: {progressText}</h2>
              <p>{showInfo.overview}</p>
            </div>
            <div className='button-container'>
              <button onClick={handleProgressBtn} className='btn'>
                Update Progress
              </button>
              <button onClick={handleDeleteBtn} className='btn delete-btn'>
                Delete Show
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
