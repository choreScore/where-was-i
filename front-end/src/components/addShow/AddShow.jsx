import AddShowMain from './AddShowMain';
import AddShowNavbar from './AddShowNavbar';
import AddShowSideBar from './AddShowSideBar';
import './style/addshow.css';

function AddShow() {
  return (
    <div className='addshow-home'>
      <AddShowNavbar />
      <div className='addshow-bottom'>
        <AddShowMain />
        <AddShowSideBar />
      </div>
    </div>
  );
}

export default AddShow;
