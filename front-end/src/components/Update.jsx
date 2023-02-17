import { useState, useEffect } from 'react';
import Show from './Show'
import '../styles/Show.css';
import '../styles/Update.css';

function Update({ progressButton, setProgressButton}){

    function goBack(e){
        e.preventDefault();
        setProgressButton(false)
    }

    function updateProgress(e){
        e.preventDefault();

        //get inputed data
        //send to DB
    }

if (progressButton === true){
    return(
        <div className='popup'>
            <h1>Update Show Progress</h1>
            <form onSubmit={updateProgress}>
                <label>Season</label>
                <input 
                    type="number"
                    name="season">
                </input>
                <br></br>
                <label>Episode</label>
                <input 
                    type="number"
                    name="Episode">
                </input>
            </form>
            <button>Update</button>
            <button onClick={goBack}>Cancel</button>
      </div>
    )}

else {
    return (
        <Show 
        progressButton={progressButton}/>
    )
}
}

export default Update;

