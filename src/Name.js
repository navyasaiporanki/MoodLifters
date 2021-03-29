import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";

function Name() {
  const history = useHistory();
  const [showContinueButton, setshowContinueButton] = useState(false);
  const [value, setValue] = useState("");

  function handleClick(event) {
    setValue(event.target.value);
    if (value !== "") {
      setshowContinueButton(true);
    } 
  }
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/image.jpeg"})`,
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="titleDiv">
        <label className="welcomeMsg">Welcome to Mood-Lifters</label>
        <div>
          <label className="stressMsg">Live Life Stress Free!</label>
        </div>
      </div>
      <div className="nameBlock">
        <label className="enterName">What would you like me to call you?</label>
        <input
          type="text"
          className="textBox"
          value={value}
          onChange={(event) => handleClick(event)}
        ></input>
        <button
          style={{ display: showContinueButton ? "block" : "none" }}
          className="getStarted"
          onClick={() => {
            history.push("/display");
          }}
        >
          {" "}
          Get Started
        </button>
        <div></div>
      </div>
    </div>
  );
}

export default Name;
