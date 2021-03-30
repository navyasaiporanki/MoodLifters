import React from "react";
import { useHistory } from "react-router-dom";
import "./ContactCard.css";

function ContactCard({ name, title, info }) {
  const history = useHistory();
  return (
    <div className="card">
      <h1>{name}</h1>
      <p className="title">{title}</p>
      <p>{info}</p>

      <p>
        <button
          onClick={() => {
            history.push("/chat");
          }}
        >
          Chat With Volunteer
        </button>
      </p>
    </div>
  );
}

export default ContactCard;
