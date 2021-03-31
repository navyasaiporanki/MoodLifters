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
            <ContactCard name="Jon Snow" title="CEO" info="The true heir to the Iron throne"></ContactCard>
            <ContactCard name="Anna Singh" title="social worker" info="Social Worker who likes to help people"></ContactCard>
            <ContactCard name="Jeff Li" title="activist" info="LGBTQ activist"></ContactCard>
           
          </div>
          <div className="rowInside">
            <ContactCard name="Lil Raj" title="student" info="Grad Student"></ContactCard>
            <ContactCard name="William Smith" title="influencer" info="Exercise and fitness expert"></ContactCard>
            <ContactCard name="Ella Kaspersky" title="assistant professor" info="Psychology professor at Harvard"></ContactCard>
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