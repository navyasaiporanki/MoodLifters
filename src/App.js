import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Name from "./Name";
import Option from "./Option";
import DisplayInfo from "./DisplayInfo";
import Question from "./Question";
import Home from "./Home";
import BreathingPlaylist from "./BreathingPlaylist";
import BreathingSong from "./BreathingSong";
import MentalHealth from "./MentalHealth";
import ChatWithVolunteer from "./ChatWithVolunteer";

import "bootstrap/dist/css/bootstrap.min.css";
import Volunteers from "./Volunteers";
import MoodTracker from "./MoodTracker";
import MusicPlaylist from "./MusicPlaylist";
import CalmMusic from "./CalmMusic";
import PreviousMood from "./PreviousMood";
import MoodOptions from "./MoodOptions";

function App() {
  return (
    <div>
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Name} exact />
            <Route path="/option" component={Option} />
            <Route path="/display" component={DisplayInfo} />
            <Route path="/question" component={Question} />
            <Route path="/home" component={Home} />
            <Route path="/breathing" component={BreathingPlaylist} />
            <Route path="/breathingSong" component={BreathingSong} />
            <Route path="/resources" component={MentalHealth} />
            <Route path="/chat" component={ChatWithVolunteer} />
            <Route path="/volunteer" component={Volunteers} />
            <Route path="/mood" component={MoodTracker} />
            <Route path="/music" component={MusicPlaylist} />
            <Route path="/calmMusic" component={CalmMusic} />
            <Route path="/prevMood" component={PreviousMood} />
            <Route path="/moodOptions" component={MoodOptions} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
