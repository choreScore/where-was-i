import {useState, useEffect} from 'react';
import Dropdown from 'react-dropdown';
import { AiFillHome } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';
import { RiDeleteBin6Fill, RiLogoutBoxFill } from 'react-icons/ri';
import { MdAccountCircle } from 'react-icons/md';

import '../styles/Navbar.css'

function Navbar({homeButtonHandler}){

    async function handlerHome(){

    }

   async function handlerAddShow(){



   }

   async function handlerDeleteShow(){

   }

   async function handlerLogout(){

   }

    return (
        <div className='navbar-container'>
        <div className='header'>
        <h1>Where Was I?</h1>
        <div className='buttons'>
            <button onClick={homeButtonHandler}>Home</button>
            <button>Add Show</button>
            <button>Logout</button>
        </div>
      </div>
      </div>
    )

}


export default Navbar