import React from "react";
import { useHistory } from "react-router-dom";
import "./BreathingPlaylist.css";

function MoodOptions() {
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
      <div className="playlistTitle">Track Mood</div>
      <div className="textAlignLeft">
        <div>My Mood Info</div>
      </div>

      <div className="options">
        <div className="exercise">
          <button
            className="buttonClass"
            onClick={() =>
              history.push({
                pathname: "/mood",
                nameOfSong: "Lions Breath",
              })
            }
          >
            {" "}
            Log my Mood
          </button>
        </div>
        <div className="exercise">
          <button
            className="buttonClass"
            onClick={() =>
              history.push({
                pathname: "/prevMood",
                nameOfSong: "Breath Focus",
              })
            }
          >
            {" "}
            View Mood History
          </button>
        </div>

      </div>

      <div className="footerBreathing" onClick={() => history.push("/home")}>
        <div className="material-icons homeFont">home</div>

        <div className="goToHome">Go to Home</div>
      </div>
    </div>
  );
}

export default MoodOptions;