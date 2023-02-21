import "./style/searchPoster.css";
import { useEffect, useState } from "react";

function SearchPoster(props) {
  const [countryFlag, setCountryFlag] = useState();
  function sendBack() {
    props.setShowSelected(props.show);
  }

  useEffect(() => {
    getCountryFlags();
  }, [props]);

  function getCountryFlags() {
    const countryFlag = props.show.origin_country[0].toLowerCase();
    setCountryFlag(countryFlag);
  }

  return (
    <div className="search-cards" onClick={sendBack}>
      <div className="search-image-container">
        <img
          src={`https://image.tmdb.org/t/p/original${props.show.image}`}
          alt=""
        />
      </div>
      <div className="search-text-container">
        <h3>{props.show.name}</h3>
      </div>
      <h4>rating:{props.show.vote_average}</h4>
      <img src={`https://flagcdn.com/w20/${countryFlag}.png`} width={20} />
    </div>
  );
}

export default SearchPoster;
