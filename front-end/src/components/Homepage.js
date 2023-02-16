import { useState, useEffect } from 'react';
import '../styles/Homepage.css';
import MoviePoster from './MoviePoster';

function Homepage({ login, currentView, setCurrentView }) {
  const [display, setDisplay] = useState('hide_button');
  const [showList, setShowList] = useState([]);
  const [loading, setLoading] = useState(undefined);

  function singleView(e) {
    e.preventDefault();
    setCurrentView('SingleShow');
  }

  useEffect(() => {
    const getShows = async () => {
      let shows = await fetch(
        // `http//localhost:4000/user/shows?user_id=${login}`
        `http://localhost:4000/user/shows?user_id=-1`
      );
      const parsed = await shows.json();
      const result = parsed.reduce((acc, cur) => {
        acc.push(cur.showname);
        return acc;
      }, []);
      setShowList(result);
    };

    getShows();
  }, []);

  return (
    <div className='homepage'>
      <div className='homepage-card-container'>
        {showList.map((show, index) => {
          return <MoviePoster
            key={index}
            setDisplay={setDisplay}
            showname={show}
            display={display}
          />;
        })}
      </div>
    </div>
  );
}

export default Homepage;
