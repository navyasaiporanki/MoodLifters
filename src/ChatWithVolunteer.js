import React from "react";
import { useHistory } from "react-router-dom";
import "./ChatWithVolunteer.css";

function ChatWithVolunteer() {
  const history = useHistory();
  return (
    <div className="bodyChat">
      <div className="titleChat">You are chatting with a Volunteer</div>
      <div className="window">
        <div className="mess">
          <div>Hello</div>
          <div style={{ marginTop: "10px" }}>How can we help you?</div>
        </div>
        <div className="footerChat">
          <div className="messageBar">Send a Message!</div>
        </div>
      </div>
      <div className="footerMentalHealth" onClick={() => history.push("/home")}>
        <div className="material-icons homeFont">home</div>
        
        <div className="goToHome">
          Go to Home
        </div>
      </div>
    </div>
  );
}

export default ChatWithVolunteer;
