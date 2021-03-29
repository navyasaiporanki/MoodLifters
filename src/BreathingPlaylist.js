import React from "react";
import { useHistory } from "react-router-dom";
import "./BreathingPlaylist.css";

function BreathingPlaylist() {
  const history = useHistory();
  return (
    <div
      className="breathingBody"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/cloudBG.jpeg"})`,
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="playlistTitle">Breathing Exercise Playlist</div>
      <div className="textAlignLeft">
        <div>Breathing Exercies to Improve mood</div>4 Songs. 11 mins 19 secs
      </div>

      <div className="options">
        <div className="exercise">
          <button
            className="buttonClass"
            onClick={() => history.push("/breathingSong")}
          >
            {" "}
            Lions Breath
            <span className="iconInfo">
              <i className="fas fa-info-circle"></i>
            </span>
          </button>
          <div className="padding10px">
            <span className="material-icons">favorite</span>
          </div>
          <label className="time">3:11</label>
        </div>
        <div className="exercise">
          <button className="buttonClass">
            {" "}
            Breath Focus
            <span className="iconInfo">
              <i className="fas fa-info-circle"></i>
            </span>
          </button>
          <div className="padding10px">
            <span className="material-icons">favorite</span>
          </div>
          <label className="time">2:08</label>
        </div>
        <div className="exercise">
          <button className="buttonClass">
            {" "}
            Equal Breathing
            <span className="iconInfo">
              <i className="fas fa-info-circle"></i>
            </span>
          </button>
          <div className="padding10px">
            <span className="material-icons">favorite</span>
          </div>
          <label className="time">2:45</label>
        </div>
        <div className="exercise">
          <button className="buttonClass">
            {" "}
            Sitali Breath
            <span className="iconInfo">
              <i className="fas fa-info-circle"></i>
            </span>
          </button>
          <div className="padding10px">
            <span className="material-icons">favorite</span>
          </div>
          <label className="time">3:15</label>
        </div>
      </div>

      <div className="footerBreathing" onClick={() => history.push("/home")}>
        <div className="material-icons homeFont">home</div>

        <div className="goToHome">Go to Home</div>
      </div>
    </div>
  );
}

export default BreathingPlaylist;
