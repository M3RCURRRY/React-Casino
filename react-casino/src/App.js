import React from "react";
import "./App.css";
import Button from "./components/controls/Button/Button";
import ContentArea from "./components/Layout/CasinoSide/ContentArea/ContentArea";
import Header from "./components/Layout/CasinoSide/Header/Header";
import ChatSide from "./components/Layout/ChatSide/ChatSide";

function App() {

  function renderCanvas() {
    let canvas = document.getElementById("myCanvas");

    let rotated = false;

    canvas.onclick = function() {
      var div = document.getElementById('myCanvas'),
        deg = rotated ? 0 : 1066;

      div.style.webkitTransform = 'rotate('+deg+'deg)'; 
      div.style.mozTransform    = 'rotate('+deg+'deg)'; 
      div.style.msTransform     = 'rotate('+deg+'deg)'; 
      div.style.oTransform      = 'rotate('+deg+'deg)'; 
      div.style.transform       = 'rotate('+deg+'deg)';

      rotated = !rotated;
    }

    canvas.width = 650;
    canvas.height = 650;

    let ctx = canvas.getContext("2d");

    //Math.floor(Math.random()*16777215).toString(16)

    function randomHex() {
      return "#" + Math.floor(Math.random()*16777215).toString(16);
    }

    drawPieSlice(ctx, 325,325,325, Math.PI, Math.PI/2, randomHex());
    drawPieSlice(ctx, 325,325,325, Math.PI, Math.PI + Math.PI/4, randomHex());
    drawPieSlice(ctx, 325,325,325, 0, Math.PI/2, randomHex());
    drawPieSlice(ctx, 325,325,325, Math.PI/2, Math.PI, randomHex());
    drawPieSlice(ctx, 325,325,300, 0, Math.PI*2, "#151515");
  }

  function drawLine(ctx, startX, startY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }

  function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
  }

  function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
  }

  return (
    <div className="App">
      <div id="modal-space"></div>
      <ChatSide />
      <div className="contentContainer">
        <div className="contentWrapper">
          <Header>
            <Button handler={() => renderCanvas()} content={"Roulette"}/>
            <Button handler={() => console.log("test")} content={"Jackpot"} />
            <Button handler={() => console.log("test")} content={"Landmines"} />
          </Header>
          <ContentArea>
            123
          </ContentArea>
          <canvas id="myCanvas"></canvas>
        </div>
      </div>
    </div>
  );
}

export default App;
