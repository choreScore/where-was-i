import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Login from './components/Login';
import Homepage from './components/Homepage'
import Show from './components/Show'



function App() {
const [login, setLogin] = useState(false);
// const [allShowNames, setAllShowNames] = useState([]);
// const [allShowImages, setAllShowImages] = useState([]);
// const [selectedShow, setSelectedShow] = useState([]);
const [currentView, setCurrentView]  = useState("");


// FOR FETCHING ALL SHOW NAMES LINKED TO USERID


// async function getAllShowNames(){
  
//   await fetch('https://localhost:4000/user/' + userId)
//     .then((response) => response.json())
//     .then((showArray) => setAllShows(showArray))
//     .catch((error) => console.log(error))
// }

// FOR FETCHING IMAGES

// async function getAllShowImages(){

// }

// async function getPoster(name){
//   const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=22232a34b1256a41ee95dfdb04aa1810&language=en-US&query=${name}&page=1&include_adult=false`)
//   const dataTreated = await data.json();
//   return (`https://image.tmdb.org/t/p/original/${dataTreated}`)
// }

// async function getTheid(name){
//   const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=22232a34b1256a41ee95dfdb04aa1810&language=en-US&query=${name}&page=1&include_adult=false`)
//   const dataTreated = await data.json();
//   console.log(data);
// }




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

        ></Login>
    </div>
  )
}

if (currentView === "SingleShow"){
  <div className='single-show'>
    <Show
      currentView={currentView}>
    </Show>
  </div>
}

if (currentView === 'Homepage'){
  return (
    <div className='Homepage'>
      <Homepage
      login={login}
      setLogin={setLogin}
      // allShows={allShows}
      // setAllShows={setAllShows}
      // showArray={showArray}
      // singleShow={singleShow}
      setCurrentView={setCurrentView}
      currentView={currentView}

      >
      </Homepage>
    </div>
  )
}




}

export default App;
