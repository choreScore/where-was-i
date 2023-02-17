
import './style/searchPoster.css';
function SearchPoster(props) {
    
    function sendBack(){
        props.setShowSelected(props.show)
    }
    
    return (
        <div className='cards' onClick={sendBack}>
        <div className='image-container'>
          <div className='image' style={{background:`url(https://image.tmdb.org/t/p/original${props.show.image}) center center no-repeat`}}/>
        </div>
        <div className='text-container'>
          <h3>{props.show.name}</h3>
        </div>
      </div>
      );
}

export default SearchPoster;