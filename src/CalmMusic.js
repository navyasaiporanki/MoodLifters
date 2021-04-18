import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./BreathingSong.css";

function CalmMusic() {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/sky.jpeg"})`,
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="breathingSongBody">
        <div className="playlistTitle">Playing Calm Music</div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/music.jpg"})`,

            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div>{location.nameOfSong}</div>
        <div className="musicDIv">
          {/* <div className="dot"></div>
          <div className="musicBar"></div> */}
          {/* <div className="dot"></div> */}
          <audio controls>
            <source src="calm-music.mp3" type="audio/mpeg" />
          </audio>
        </div>

        <div className="footerDiv">
          <div
            className="footerBreathingSong"
            onClick={() => history.push("/music")}
          >
            <div className="material-icons homeBS">playlist_play</div>

            <div className="goToHomeBS">Playlist</div>
          </div>
          <div
          className="footerBreathingSong"
          onClick={() => history.push("/home")}
        >
          <div className="material-icons homeBS">home</div>

          <div className="goToHomeBS">Go to Home</div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CalmMusic;
