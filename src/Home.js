import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

function Home() {
  const history = useHistory();
  return (
    <div
      className="homeMain"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/cloud.jpeg"})`,
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="homeBody">
        <div className="showUserName"></div>

        <div className="optionsHome">
          <div className="text">How can we help you today?</div>
          <button
            className="buttonClassHome"
            onClick={() => history.push("/breathing")}
          >
            {" "}
            Do CBT Breathing Exercise{" "}
          </button>
          <button
            className="buttonClassHome"
            onClick={() => history.push("/music")}
          >
            {" "}
            Listen to Calm music
          </button>
          <button
            className="buttonClassHome"
            onClick={() => history.push("/resources")}
          >
            {" "}
            Get Mental health Resources
          </button>
        </div>

        <div className="footerHome">
          <div className="iconsClass">
            <div
              className="material-icons homeFontIcon"
              onClick={() => history.push("/moodOptions")}
            >
              sentiment_satisfied_alt
            </div>
            <i
              className="fas fa-hands-helping doctorIcon"
              onClick={() => history.push("/volunteer")}
            ></i>
          </div>
          <div className="iconsClass">
            <div style={{ marginLeft: "-15px", fontSize: "12px" }}>
              Track Mood
            </div>
            <div style={{ marginRight: "-25px", fontSize: "12px" }}>
              Chat with a Volunteer
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
