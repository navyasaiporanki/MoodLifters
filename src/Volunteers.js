import React from "react";
import { useHistory } from "react-router-dom";
import "./Volunteers.css";
import ContactCard from './ContactCard';

 function Volunteers() {
  const history = useHistory();
  return (
    <div className="volResBody">
      <div className="titleVolunteer">Mental Health Resources</div>
      <div className="resources">
        <div className="row">
          <div className="rowInside">
            <ContactCard name="John Snow" title="CEO" info="some info"></ContactCard>
            <ContactCard></ContactCard>
            <ContactCard></ContactCard>
           
          </div>
          <div className="rowInside">
            <ContactCard></ContactCard>
            <ContactCard></ContactCard>
            <ContactCard></ContactCard>
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