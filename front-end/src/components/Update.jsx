import { useState, useEffect } from 'react';
import Show from './Show'
import '../styles/Show.css';
import '../styles/Update.css';

function Update({ progressButton, setProgressButton, showname, login, singleShowId, progress, showImage}){
    const [episodeSelect2, setEpisodeSelect2] = useState('');
    const [seasonSelect2, setSeasonSelect2] = useState('');

    function goBack(e){
        e.preventDefault();
        setProgressButton(false)
    }

    async function updateProgress(e){
        e.preventDefault();
        const obj = {
                "user_id": login,
                "show_id": singleShowId,
                "showname": showname,
                "season": seasonSelect2,
                "episode": episodeSelect2,
                "url": showImage
        }

        await fetch('https://where-was-i-show-tracker.onrender.com/user/shows', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            method: "PUT",
            body: JSON.stringify(obj)
            }
        )
    }
        


if (progressButton === true){
    return(
        <div className='popup'>
            <h1>{showname}: Update Progress</h1>
            <form>
                <label>Season</label>
                <input 
                    type="number"
                    name="season"
                    value={seasonSelect2}
                    onChange={(event) => setSeasonSelect2(event.target.value)}
                    />
                <br></br>
                <label>Episode</label>
                <input 
                    type="number"
                    name="Episode"
                    value={episodeSelect2}
                    onChange={(event) => setEpisodeSelect2(event.target.value)}
                />
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

