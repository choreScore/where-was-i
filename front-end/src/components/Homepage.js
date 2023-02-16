import {useState, useEffect} from 'react';
import '../styles/Homepage.css'

function User({setCurrentView, currentView}){
  const [display, setDisplay] = useState('hide_button');
  const [moviesList, setMoviesLis] = useState([])


  function showButton(e){
    e.preventDefault();
    setDisplay('show_button');
  };

  function hideButton(e){
    e.preventDefault();
    setDisplay('hide_button');
  };

  function singleView(e){
    console.log('here')
    e.preventDefault();
    console.log(setCurrentView)
    setCurrentView('SingleShow');
    console.log(currentView);
  }

  useEffect(() => {

  }, [])
  
  if (currentView === 'Homepage'){
    return (
      <div className='homepage'>
        {/* <div className='header'>
          <h1>Where Was I?</h1>
        </div> */}

        <div className="homepage-card-container">

        <div 
          className="cards"
          onMouseEnter={showButton}
          onMouseLeave={hideButton}>
            <img className="card-img" src={require("../test-image/sopranos.jpg")} alt="card-image"/>
            <div className="card-text">
                <h3>TV Show 2</h3>
            </div>
            <div className={display}>
                <button id="progress">View Progress</button>
            </div>
        </div>

        <div 
          className="cards"
          onMouseEnter={showButton}
          onMouseLeave={hideButton}>
            <img className="card-img" src={require("../test-image/sopranos.jpg")} alt="card-image"/>
            <div className="card-text">
                <h3>TV Show 3</h3>
            </div>
            <div className={display}>
                <button id="progress"
                onClick={singleView}>View Progress</button>
            </div>
        </div>

        <div 
          className="cards"
          onMouseEnter={showButton}
          onMouseLeave={hideButton}>
            <img className="card-img" src={require("../test-image/sopranos.jpg")} alt="card-image"/>
            <div className="card-text">
                <h3>TV Show 4</h3>
            </div>
            <div className={display}>
                <button id="progress">View Progress</button>
            </div>
        </div>

        <div 
          className="cards"
          onMouseEnter={showButton}
          onMouseLeave={hideButton}>
            <img className="card-img" src={require("../test-image/sopranos.jpg")} alt="card-image"/>
            <div className="card-text">
                <h3>TV Show 5</h3>
            </div>
            <div className={display}>
                <button id="progress">View Progress</button>
            </div>
        </div>


      </div>    
      </div>
            
    )
}
}


export default User;
