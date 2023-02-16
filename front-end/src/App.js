import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Login from './components/Login';
import Homepage from './components/Homepage'
import Show from './components/Show'
import Navbar from './components/Navbar';



function App() {
const [login, setLogin] = useState(false);
// const [allShowNames, setAllShowNames] = useState([]);
// const [allShowImages, setAllShowImages] = useState([]);
// const [selectedShow, setSelectedShow] = useState([]);
const [currentView, setCurrentView]  = useState("");
const [userInfo, setUserInfo] = useState({});

function homeButtonHandler(){
  setCurrentView('Homepage')
}


async function getShowID(name){
  let array = fetch(`https://api.themoviedb.org/3/search/movie?api_key=22232a34b1256a41ee95dfdb04aa1810&language=en-US&query=${name}&page=1&include_adult=false`)
  .then((data) => data.json())
  .then((object) => object.results)
  .then((result) => (result))
  .catch((error) => console.log(error))

  console.log(array)
}

async function getShowImage(name){
  let array = fetch(`https://api.themoviedb.org/3/search/movie?api_key=22232a34b1256a41ee95dfdb04aa1810&language=en-US&query=${name}&page=1&include_adult=false`)
  .then((data) => data.json())
  .then((data) => data.results)
  .then((result) => result)

  // .then((id) => fetch(`https://api.themoviedb.org/3/search/movie?api_key=22232a34b1256a41ee95dfdb04aa1810&language=en-US&query=${id}&page=1&include_adult=false`))
  // .then((image) => image.json())
  // .then((imageSource) => `https://image.tmdb.org/t/p/original/${imageSource}`)
  .catch((error) => console.log(error))

  // const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=22232a34b1256a41ee95dfdb04aa1810&language=en-US&query=${name}&page=1&include_adult=false`)
  // const id = await data.json();
  // const image = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=22232a34b1256a41ee95dfdb04aa1810&language=en-US&query=${id}&page=1&include_adult=false`)
  // const imageSource = await data.json();
  // return (`https://image.tmdb.org/t/p/original/${imageSource}`)
}

// console.log('here ---->', getShowImage("Jack Reacher"))
getShowID("Jack Reacher")


// async function singleShow(){
  //combine text and image
  //setSelectedShow()
  //setCurrentView("SingleShow")
//}





if (login === false){
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
