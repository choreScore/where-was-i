import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';

function Show({exampleData}){


    //   const [allShows, setAllShows] = useState([]); 
    //   const navigate = useNavigate();
      
      function getAllShows(exampleData){
        const result = exampleData.map((result) => <p>{result.showname}</p>)
        return result;
    
      }
    
    
    
    
        return (
              <header className="App-header">
                <div className="header">
                <h1>Where Was I?</h1>
                </div>
              <div className='cards'>
                {/* <img class='tv-img' alt='' src=''> */}
                <div class='card-text'>
                  <h3>{getAllShows(exampleData)}</h3>
                </div>
              </div>
              </header>
    
                
            )


}

export default Show;
