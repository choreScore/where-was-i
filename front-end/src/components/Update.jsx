import { useState, useEffect } from 'react';
import Show from './Show'
import '../styles/Show.css';
import '../styles/Update.css';

function Update({ progressButton, setProgressButton, showname, login, singleShowId, progress}){

    function goBack(e){
        e.preventDefault();
        setProgressButton(false)
    }

    let requestOption = {
        method: "PUT",
        body: {
            user_id: login,
            show_id: singleShowId,
            showname: showname,
            season: progress[0],
            episode: progress[1]
        }
    }



    function updateProgress(e){
        e.preventDefault();
        let requestOption = {
            method: "PUT",
            body: {
                user_id: login,
                show_id: singleShowId,
                showname: showname,
                season: progress[0],
                episode: progress[1],
                image: 'url'
            }
        };
        fetch('http://localhost:4000/user/shows', requestOption);
    }


if (progressButton === true){
    return(
        <div className='popup'>
            <h1>{showname}: Update Progress</h1>
            <form>
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
            <button onClick={updateProgress}>Update</button>
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

