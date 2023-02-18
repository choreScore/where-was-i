import { useEffect, useState } from 'react';
import AddShowMain from './AddShowMain';
import AddShowNavbar from './AddShowNavbar';
import AddShowSideBar from './AddShowSideBar';
import './style/addshow.css';

function AddShow() {
  const [showSelected, setShowSelected] = useState(false)
  const [searchList, setSearchList] = useState([])

  return (
    <div className='addshow-home'>
      <AddShowNavbar setSearchList={setSearchList}/>
      <div className='addshow-bottom'>
        <AddShowMain searchList={searchList} setShowSelected={setShowSelected} />
        {/*showSelected && <AddShowSideBar showSelected={showSelected}/>*/}
        
      </div>
    </div>
  );
}

export default AddShow;
