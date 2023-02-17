import './App.css';
<<<<<<< HEAD
import {useState, useEffect, useRef} from 'react';
=======
import { useState, useEffect } from 'react';
>>>>>>> e52c42f4ad650fab578dd41bc78738d5e14cbcba
import Login from './components/Login';
import Homepage from './components/Homepage';
import Show from './components/Show';
import Navbar from './components/Navbar';
import AddShow from './components/addShow/AddShow';

function App() {
  const [login, setLogin] = useState('false');
  const [currentView, setCurrentView] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [showname, setShowname] = useState('')

  function homeButtonHandler() {
    setCurrentView('Homepage');
  }

<<<<<<< HEAD



function homeButtonHandler(){
  setCurrentView('Homepage')
}


async function getShowID(name){
  const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=22232a34b1256a41ee95dfdb04aa1810&language=en-US&query=warcraft&page=1&include_adult=false`)
  const dataTreated = await data.json();
  if(dataTreated.results.lenthth > 1){
    for(let movie of dataTreated.results){
      if(movie.name == name){
        return movie.id;
      }
=======
  function check() {
    if (localStorage['user_id'] !== 'false') {
      console.log(localStorage.user_id);
      setLogin(localStorage['user_id']);
      setCurrentView('Homepage');
>>>>>>> e52c42f4ad650fab578dd41bc78738d5e14cbcba
    }
  }
  useEffect(() => {
    check();
  }, [login]);

<<<<<<< HEAD
async function getShowImage(name){
  let id = await getShowID(name);
  let posterAdd = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=22232a34b1256a41ee95dfdb04aa1810&language=en-US&query=${id}&page=1&include_adult=false`)
  let posterAddTreated = posterAdd.json();
  return (`https://image.tmdb.org/t/p/original/${posterAddTreated}`);
}


function check(){
  if (localStorage["user_id"]!=='false'){
    setLogin(localStorage["user_id"]);
    setCurrentView("Homepage");
  }
}
useEffect(() => {
check();
},[login]);
// async function singleShow(){
  //combine text and image
  //setSelectedShow()
  //setCurrentView("SingleShow")
//}





if (login === 'false'){
  return (
    <div className='Login'>
      <Login
        login={login}
        setLogin={setLogin}
        setCurrentView={setCurrentView}
        setUserInfo={setUserInfo}
        ></Login>
    </div>
  )
}

if (currentView === "SingleShow"){
  return(
  <div className='single-show'>
    <Navbar
      homeButtonHandler={homeButtonHandler}>
      </Navbar>
    <Show
      currentView={currentView}>
    </Show>
  </div>)
}

if (currentView === 'Homepage'){
  return (
    <div className='Homepage'>
      <Navbar
        setLogin={setLogin}
        homeButtonHandler={homeButtonHandler}>
      </Navbar>
      <Homepage
      login={login}
      setLogin={setLogin}
      // allShows={allShows}
      // setAllShows={setAllShows}
      // showArray={showArray}
      // singleShow={singleShow}
      setCurrentView={setCurrentView}
      currentView={currentView}
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      >
      </Homepage>
    </div>
  )
}


=======
  function renderSwitch(component) {
    switch (component) {
      case 'AddNew':
        return (
          <div className='add-new-show'>
            <AddShow currentView={currentView} />
          </div>
        );
      case 'SingleShow':
        return (
          <div className='single-show'>
            <Show currentView={currentView} />
          </div>
        );
      case 'Homepage':
        return (
          <div className='Homepage'>
            <Homepage
              login={login}
              setLogin={setLogin}
              setCurrentView={setCurrentView}
              currentView={currentView}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              setShowname={setShowname}
            />
          </div>
        );
    }
  }
>>>>>>> e52c42f4ad650fab578dd41bc78738d5e14cbcba

  function addShowHandler() {
    setCurrentView('AddNew')
  }

  if (login === 'false') {
    return (
      <div className='Login'>
        <Login
          login={login}
          setLogin={setLogin}
          setCurrentView={setCurrentView}
          setUserInfo={setUserInfo}
        />
      </div>
    );
  } else {
    return (
      <div className='main-page'>
        <Navbar
          homeButtonHandler={homeButtonHandler}
          addShowHandler={addShowHandler}
          login={login}
          setLogin={setLogin}
        />
        {renderSwitch(currentView)}
      </div>
    );
  }
}

export default App;
