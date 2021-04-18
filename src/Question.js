import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Question.css";

function Question() {
  const [selected, setSelected] = useState("");
  const history = useHistory();
  return (
    <div>
      <div className="bodyQuestionInfo">
        <label className="displayMessage">How are you feeling today?</label>
        <div className="btnDiv">
          <button
            onClick={() => setSelected("good")}
            className={selected === "good" ? "selected" : "btnQuestionPage"}
          >
            Good
          </button>
        </div>
        <div className="btnDiv">
          <button
            onClick={() => setSelected("sad")}
            className={selected === "sad" ? "selected" : "btnQuestionPage"}
          >
            Sad
          </button>
        </div>
        <div className="btnDiv">
          <button
            onClick={() => setSelected("stressed")}
            className={selected === "stressed" ? "selected" : "btnQuestionPage"}
          >
            Stressed
          </button>
        </div>
        <div className="btnDiv">
          <button
            onClick={() => setSelected("angry")}
            className={selected === "angry" ? "selected" : "btnQuestionPage"}
          >
            Angry
          </button>
        </div>
        <div className="contentDivMessage">
          <label style={{ display: selected === "good" ? "block" : "none" }}>
            Glad to hear it. <br/> Recognizing how you feel is an important part of
            mindfulness, so we’ll keep checking in with you.
          </label>
          <label
            style={{
              display:
                selected === "sad" ||
                selected === "angry" ||
                selected === "stressed"
                  ? "block"
                  : "none",
            }}
          >
            That's OK.
            <br />
            Recognizing how you feel is an important part of mindfulness, so
            we’ll keep checking in with you.
          </label>
        </div>
        <div className="btnContinue">
          <button className="btnCon" onClick={() => history.push("/home")}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
