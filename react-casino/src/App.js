import React from "react";
import "./App.css";
import Button from "./components/controls/Button/Button";
import ContentArea from "./components/Layout/CasinoSide/ContentArea/ContentArea";
import Header from "./components/Layout/CasinoSide/Header/Header";
import ChatSide from "./components/Layout/ChatSide/ChatSide";
import Roulette from "./components/Layout/GameModes/Roulette/Roulette";

function App() {

  return (
    <div className="App">
      <div id="modal-space"></div>
      <ChatSide />
      <div className="contentContainer">
        <div className="contentWrapper">
          <Header>
            <Button handler={() => null} content={"Roulette"}/>
            <Button handler={() => console.log("test")} content={"Jackpot"} />
            <Button handler={() => console.log("test")} content={"Landmines"} />
          </Header>
          <ContentArea>
            <Roulette/>
          </ContentArea>
          
        </div>
      </div>
    </div>
  );
}

export default App;
