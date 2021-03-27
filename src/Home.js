import "./Home.css";

function Home() {
  return (
    <div className="homeBody">
      <div className="showUserName">Welcome John,</div>

      <div className="options">
        <div className="text">How can we help you today?</div>
        <button className="buttonClass"> Do CBT Breathing Exercise </button>
        <button className="buttonClass"> Listen to Calm music</button>
        <button className="buttonClass"> Get Mental health Resources</button>
      </div>

      <div className="footerHome">
        {/* <button className="bottom">Mood Tracker</button> */}

        <div className="material-icons homeFont">sentiment_satisfied_alt</div>
        {/* <button className="bottom">Doctor</button> */}
        <i className="fas fa-user-md doctorIcon"></i>
      </div>
    </div>
  );
}

export default Home;
