import "./BreathingSong.css";

function BreathingSong() {
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
        <div className="playlistTitle">Playing Breathing Exercise</div>
        <div
          className="image"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/yoga.jpg"})`,

            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div>Name of the song</div>
        <div className="musicDIv">
          <div className="dot"></div>
          <div className="musicBar"></div>
          {/* <div className="dot"></div> */}
        </div>

        <div className="controls">
          <div className="controlsFlex">
            <div>
              <span className="material-icons">skip_previous</span>
            </div>
            <div className="playOption">
              <span className="material-icons font-size">
                play_circle_filled
              </span>
            </div>
            <div>
              <span className="material-icons">skip_next</span>
            </div>
          </div>
        </div>
        <div className="footerBreathingSong">
          <div className="material-icons homeBS">home</div>

          <div className="goToHomeBS">Go to Home</div>
        </div>
      </div>
    </div>
  );
}

export default BreathingSong;
