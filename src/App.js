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
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
