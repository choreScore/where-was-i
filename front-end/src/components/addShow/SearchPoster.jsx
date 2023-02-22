import "./style/searchPoster.css";
import { useEffect, useState } from "react";

function SearchPoster(props) {
  const [countryFlag, setCountryFlag] = useState();
  const showName =
    props.show.name.length > 30
      ? props.show.name.slice(0, 19) + " ..."
      : props.show.name;
  function sendBack() {
    props.setShowSelected(props.show);
  }

  useEffect(() => {
    getCountryFlags();
  }, [props]);

  async function getCountryFlags() {
    const countryFlag = await props.show.origin_country[0].toLowerCase();
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
        <h3>{showName}</h3>
        <div className="rating-and-flag">
          <img src={`https://flagcdn.com/w20/${countryFlag}.png`} width={20} />
          <p>Rating {props.show.vote_average}/10</p>
        </div>
      </div>
    </div>
  );
}

export default SearchPoster;
