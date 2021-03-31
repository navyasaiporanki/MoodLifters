import React from "react";
import { useHistory } from "react-router-dom";
import "./Volunteers.css";
import ContactCard from './ContactCard';

 function Volunteers() {
  const history = useHistory();
  return (
    <div className="volResBody">
      <div className="titleVolunteer">Chat with one of the following volunteers.</div><div> All of the following volunteers are here to listen to you and 
      offer advices on how to overcome mental health problems.</div>
      <div className="resources">
        <div className="row">
          <div className="rowInside">
            <ContactCard name="John Smith" title="Tech Lead at Google" info="John is also a certified mental health counselor"></ContactCard>
            <ContactCard name="Anna Singh" title="social worker" info="Social Worker who likes to help people"></ContactCard>
            <ContactCard name="Jeff Li" title="activist" info="LGBTQ activist"></ContactCard>
           
          </div>
          <div className="rowInside">
            <ContactCard name="Lil Raj" title="student" info="Grad Student at Northeastern University"></ContactCard>
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