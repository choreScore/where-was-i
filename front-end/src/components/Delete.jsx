import { useState, useEffect } from 'react';
import Show from './Show'
import '../styles/Show.css';
import '../styles/Update.css';

function Update({ deleteButton, setDeleteButton, showname, singleShowId, login }){

    function goBack(e){
        e.preventDefault();
        setDeleteButton(false)
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

    }


    if (deleteButton === true){
        return(
            <div className='popup'>
                <h1>{showname}: Delete Show?</h1>
                <button onClick={deleteShow}>Delete</button>
                <button onClick={goBack}>Cancel</button>
        </div>
        )}

    else {
        return (
            <Show 
            deleteButton={deleteButton}/>
        )
    }
}

export default Update;

