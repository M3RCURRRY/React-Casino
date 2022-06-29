import React from "react";
import "./App.css";
import Button from "./components/controls/Button/Button";
import Header from "./components/Layout/CasinoSide/Header/Header";
import ChatSide from "./components/Layout/ChatSide/ChatSide";

function App() {
  return (
    <div className="App">
      <ChatSide/>
      <Header>
        <Button handler={() => console.log("test")} content={"Click to test"} />
      </Header>
    </div>
  );
}

export default App;
