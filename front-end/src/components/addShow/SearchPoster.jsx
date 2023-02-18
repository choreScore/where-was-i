import './style/searchPoster.css';
function SearchPoster(props) {
  function sendBack() {
    props.setShowSelected(props.show);
  }

  return (
    <div className='search-cards' onClick={sendBack}>
      <div className='search-image-container'>
        <img
          src={`https://image.tmdb.org/t/p/original${props.show.image}`}
          alt=''
        />
      </div>
      <div className='search-text-container'>
        <h3>{props.show.name}</h3>
      </div>
    </div>
  );
}

export default SearchPoster;
