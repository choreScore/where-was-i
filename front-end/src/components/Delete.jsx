import { useState, useEffect } from 'react';
import Show from './Show'
import '../styles/Show.css';
import '../styles/Update.css';

function Update({ deleteButton, setDeleteButton, showname, singleShowId, login, setDefaultView, setCurrentView }){

    function goBack(e){
        e.preventDefault();
        setDeleteButton(false)
        setDefaultView(true)
    }

    async function deleteShow(e){
        e.preventDefault();
        const obj = {
            "show_id": singleShowId,
            "user_id": login
        }
        const query = 
    
    await fetch('http://localhost:4000/user/shows?user_id='+ login + '&show_id=' + singleShowId, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'DELETE',
        body: JSON.stringify(obj)
        }
        )
    setCurrentView('Homepage')
    }


    if (deleteButton === true){
        return(
            <div>
                <br></br>
                <h3>Are you sure you want to delete?</h3>
                <button onClick={deleteShow} className='btn delete-btn'>Yes</button>
                <button onClick={goBack} className='btn'>Cancel</button>
            </div>
        )}
}

export default Update;

