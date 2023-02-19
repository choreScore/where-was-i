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
            <div>
                <h3>Are you sure you want to delete?</h3>
            </div>
        //     <div>
        //     <div cplassName='show-text-container'>
        //       <h1>{showname}</h1>
        //       <h2>Progress: {progressText}</h2>
        //       <p>{showInfo.overview}</p>
        //     </div>
        //     <div className='button-container'>
        //       <button onClick={handleProgressBtn} className='btn'>
        //         Update Progress
        //       </button>
        //       <button onClick={handleDeleteBtn} className='btn delete-btn'>
        //         Delete Show
        //       </button>
        //     </div>
            

            
        // //     <div className='popup'>
        // //         <h1>{showname}: Delete Show?</h1>
        // //         <button onClick={deleteShow}>Delete</button>
        // //         <button onClick={goBack}>Cancel</button>
        // // </div>

        
        )}

    else {
        return (
            <Show 
            deleteButton={deleteButton}/>
        )
    }
}

export default Update;

