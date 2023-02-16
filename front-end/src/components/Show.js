import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';

function Show(props){


    //   const [allShows, setAllShows] = useState([]); 
    //   const navigate = useNavigate();
      
      function getAllShows(exampleData){
        const result = exampleData.map((result) => <p>{result.showname}</p>)
        return result;
    
      }
    
    
    
    
        return (
              <header className="App-header">
                <h1>I'm in Show</h1>
              </header>
    
                
            )


}

export default Show;
