import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import '../styles/Show.css';

function Show(props) {
  const [progressPopUpOpen, setProgressPopUpOpen] = useState(false);
  const [deletePopUpOpen, setDeletePopUpOpen] = useState(false);

  //   const [allShows, setAllShows] = useState([]);
  //   const navigate = useNavigate();

  //   function getAllShows(exampleData){
  //     const result = exampleData.map((result) => <p>{result.showname}</p>)
  //     return result;

  //   }

  async function handleOpenProgressPopUp(e) {
    e.preventDefault();
    setProgressPopUpOpen(true);
  }

  async function handelCloseProgressPopUp(e) {
    e.preventDefault();
    setProgressPopUpOpen(false);
  }

  async function submitProgress(e) {
    e.preventDefault();
    //send info to DB
    setProgressPopUpOpen(false);
  }

  async function handleOpenDeletePopUp(e) {
    e.preventDefault();
    setDeletePopUpOpen(true);
  }

  async function handleCloseDeletePopUp(e) {
    e.preventDefault();
    setDeletePopUpOpen(false);
  }

  async function submitDelete(e) {
    e.preventDefault();
    //send info to DB
    setDeletePopUpOpen(false);
  }

  return (
    <div className="single-show">
      <div className="single-show-container">
        <div className="show-image-container">
          <img
            src={require('C:/Users/Emman/Desktop/where-was-i/front-end/src/test-image/background.png')}
          />
        </div>

        <div className="show-text-container">
          <div className="show-text">
            <h1>TV Show Name</h1>
            <h2>Progress:</h2>
            <h3>Season 1, Episode 4</h3>
          </div>
          <div className="update-progress-buttons">
            <button onClick={handleOpenProgressPopUp}>Update Progress</button>
            <button onClick={handleOpenDeletePopUp}>Delete Show</button>

            {progressPopUpOpen && (
              <div>
                <div className="popup-content">
                  <p>Save New Progress?</p>
                </div>
                <button onClick={submitProgress}>Submit</button>
                <button onClick={handelCloseProgressPopUp}>Cancel</button>
              </div>
            )}

            {deletePopUpOpen && (
              <div class="popup">
                <div className="popup-content">
                  <span class="close-button">&times;</span>
                  <p>Delete Show?</p>
                </div>
                <button onClick={submitDelete}>Delete</button>
                <button onClick={handleCloseDeletePopUp}>Cancel</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
