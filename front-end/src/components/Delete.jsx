import { useState, useEffect } from 'react';
import Show from './Show'
import '../styles/Show.css';
import '../styles/Update.css';

function Update({ deleteButton, setDeleteButton, showname}){

    function goBack(e){
        e.preventDefault();
        setDeleteButton(false)
    }

    function deleteShow(e){
        e.preventDefault();

        //delete show from DB
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

