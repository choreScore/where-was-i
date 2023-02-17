import { useEffect, useState } from 'react';
import AddShowMain from './AddShowMain';
import AddShowNavbar from './AddShowNavbar';
import AddShowSideBar from './AddShowSideBar';
import './style/addshow.css';

function AddShow() {
  const [showSelected, setShowSelected] = useState(true)
  const [searchList, setSearchList] = useState([])

  return (
    <div className='addshow-home'>
      <AddShowNavbar setSearchList={setSearchList}/>
      <div className='addshow-bottom'>
        <AddShowMain searchList={searchList} />
        {showSelected && <AddShowSideBar />}
        
      </div>
    </div>
  );
}

export default AddShow;
