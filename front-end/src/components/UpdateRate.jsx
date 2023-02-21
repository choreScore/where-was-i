import { useState } from "react";
import "../styles/Show.css";
import "../styles/Update.css";

function UpdateRate({
  setRankButton,
  showname,
  login,
  singleShowId,
  showImage,
  setDefaultView,
  setCurrentView,
}) {
  const [rankValue, setRankValue] = useState("");

  function goBack(e) {
    e.preventDefault();
    setRankButton(false);
    setDefaultView(true);
  }

  async function updateProgress(e) {
    e.preventDefault();
    const obj = {
      user_id: login,
      show_id: singleShowId,
      showname: showname,
      personal_ranking: rankValue,
      url: showImage,
    };

    await fetch("http://localhost:4000/user/shows", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(obj),
    });
    setCurrentView("Homepage");
  }

  return (
    <div className="update">
      <br></br>
      <h3>Rate this series!</h3>
      <div className="update-container">
        <form onSubmit={updateProgress}>
          <label>How good is this?</label>
          <select onChange={(event) => setRankValue(event.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <div className="update-btn-container">
            <button type="submit" className="btn">
              Rate!
            </button>
            <button onClick={goBack} className="btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateRate;
