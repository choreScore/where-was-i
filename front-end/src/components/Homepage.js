import { useState, useEffect } from 'react';
import '../styles/Homepage.css';
import MoviePoster from './MoviePoster';

function Homepage({ login, currentView, setCurrentView, setShowname }) {
  const [showList, setShowList] = useState([]);

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
          return (
            <MoviePoster key={index} showname={show} singleView={singleView} setShowname={setShowname} />
          );
        })}
      </div>
    </div>
  );
}

export default Homepage;
