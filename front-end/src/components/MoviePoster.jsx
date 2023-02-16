function MoviePoster({setDisplay, showname, display}) {

  function showButton(e) {
    e.preventDefault();
    setDisplay('show_button');
  }

  function hideButton(e) {
    e.preventDefault();
    setDisplay('hide_button');
  }

  return (
    <div className='cards' onMouseEnter={showButton} onMouseLeave={hideButton}>
      <img
        className='card-img'
        src={require('../test-image/sopranos.jpg')}
        alt={showname}
      />
      <div className='card-text'>
        <h3>{showname}</h3>
      </div>
      <div className={display}>
        <button id='progress'>View Progress</button>
      </div>
    </div>
  );
}

export default MoviePoster;
