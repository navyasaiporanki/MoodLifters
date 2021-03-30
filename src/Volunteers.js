import React from "react";
import { useHistory } from "react-router-dom";
import "./Volunteers.css";
import ContactCard from './ContactCard';

 function Volunteers() {
  const history = useHistory();
  return (
    <div className="volResBody">
      <div className="titleVolunteer">Talk to a volunteer</div>
      <div className="resources">
        <div className="row">
          <div className="rowInside">
            <ContactCard name="Jon Snow" title="CEO" info="some info"></ContactCard>
            <ContactCard name="Anna Singh" title="social worker" info="some infos"></ContactCard>
            <ContactCard name="Jeff Li" title="activist" info="some info"></ContactCard>
           
          </div>
          <div className="rowInside">
            <ContactCard name="Shubham Singal" title="student" info="some info"></ContactCard>
            <ContactCard name="William Smith" title="influencer" info="some info"></ContactCard>
            <ContactCard name="Ella Kaspersky" title="assistant professor" info="some info"></ContactCard>
          </div>
          
          
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


export default Volunteers;