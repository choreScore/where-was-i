import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef} from 'react';
import Login from './components/Login';
import Homepage from './components/Homepage'
import Show from './components/Show'
import Navbar from './components/Navbar';



function App() {
const [login, setLogin] = useState('false');
// const [allShowNames, setAllShowNames] = useState([]);
// const [allShowImages, setAllShowImages] = useState([]);
// const [selectedShow, setSelectedShow] = useState([]);
const [currentView, setCurrentView]  = useState("");
const [userInfo, setUserInfo] = useState({});





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
    }
  }
}

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




}

export default App;
