import React from "react";

import { Link, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Button from "./components/controls/Button/Button";
import ContentArea from "./components/Layout/CasinoSide/ContentArea/ContentArea";
import Header from "./components/Layout/CasinoSide/Header/Header";
import ChatSide from "./components/Layout/ChatSide/ChatSide";
import Roulette from "./components/Layout/GameModes/Roulette/Roulette";

function App() {

  return (
    <div className="App">
      <div className="chatSideAlign">
        <ChatSide />
      </div>

      <Router>
        <div className="contentContainer">
          <div className="contentWrapper">
            <Header>
              <Link to="/">
                <Button handler={() => null} content={"Roulette"}/>
              </Link>

              <Link to="/jackpot">
                <Button handler={() => console.log("test")} content={"Jackpot"} />
              </Link>

              <Link to="/landmines">
                <Button handler={() => console.log("test")} content={"Landmines"} />
              </Link>
            </Header>
            <ContentArea>
              <Roulette/>
            </ContentArea>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
