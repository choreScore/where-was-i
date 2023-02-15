import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Show from './Show'

function User({exampleData}){

  console.log(exampleData)


  const [allShows, setAllShows] = useState([]); 
  const navigate = useNavigate();

    return (
      <div className='user'>
      <header className='card-header'>
      <img class='show-img' alt='' src=''/>
      <div className='card-body'>
        <h3></h3>
      </div>
      <Show exampleData={exampleData}/>
      </header>
      </div>

            
        )
}


export default User;