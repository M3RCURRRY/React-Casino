import { useEffect, useRef, useState } from "react";
import BetManager from "../../BetManager/BetManager";
import BetPosition from "../../BetPosition/BetPosition";
import RollHistory from "../../RollHistory/RollHistory";
import styles from "./Roulette.module.css";
import * as CanvasHelper from "./../../../../canvasHelper";

function renderCanvas() {
  let canvas = document.getElementById("myCanvas");


  canvas.width = 650;
  canvas.height = 650;

  const ctx = canvas.getContext("2d");

  function randomHex() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
  }

  let lastPoint = Math.PI * 3 / 2;

  let currentColor = null;
  for(let i in Array.from(Array(40).keys())) {    
    if (i % 21 === 0 && i != 0) currentColor = "gold";
    else if (i % 5 === 0 && i != 0) currentColor = "#006ebd";
    else if (i % 2 === 1) currentColor = "red";
    else currentColor = "#121111";

    let computed = 2 * Math.PI * 1 / 40;
    drawPieSlice(ctx, 325,325,325, lastPoint, lastPoint + computed, currentColor);
    lastPoint += computed;
  }

  drawPieSlice(ctx, 325,325,310, 0, Math.PI*2, "#151515");
}

function calcDeg() {
  return (360 + Math.floor(Math.random() * 361));
}

let deg = 0;
let rotated = false;
let direction = true;

function spinWheel () {
  const div = document.getElementById('myCanvas');
  if (deg > 10000) direction = false;
  if (deg < 720 ) direction = true;
  (direction) ? deg += calcDeg() : deg -= calcDeg();

  div.style.webkitTransform = 'rotate('+deg+'deg)'; 
  div.style.mozTransform    = 'rotate('+deg+'deg)'; 
  div.style.msTransform     = 'rotate('+deg+'deg)'; 
  div.style.oTransform      = 'rotate('+deg+'deg)'; 
  div.style.transform       = 'rotate('+deg+'deg)';

  rotated = !rotated;
}

function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX,centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();
}


function Roulette() {

  const [time, setTime] = useState(5);
  const [bet, setBet] = useState(0);
  const [rolls, setRolls] = useState([]);

  const grayRef = useRef(null);
  const redRef = useRef(null);
  const blueRef = useRef(null);
  const goldRef = useRef(null);

  const intervalRef = useRef();

  useEffect(() => {
    renderCanvas();

    intervalRef.current = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    return function clearCounter() {
      clearInterval(intervalRef.current);
    }
  }, []);

  function determineColor() {
    const colorIndex = Math.floor((deg % 360) / 9) + 1;

    let color = null;
    //setRolls([...rolls, "gold"]);
    if (colorIndex % 21 === 0 && colorIndex != 0) color = "gold";
    else if (colorIndex % 5 === 0 && colorIndex != 0) color = "blue";
    else if (colorIndex % 2 === 1 && colorIndex != 0) color = "red";
    else color = "gray";

    setRolls((rolls.length > 19) ? [...(rolls.slice(1)), color] : [...rolls, color]);
  }

  useEffect(() => {
    if (time < 1) {
      clearInterval(intervalRef.current);
      spinWheel();
      setTimeout(() => {
        determineColor();
        clearPositions();
        setTime(5);
        intervalRef.current = setInterval(() => {
          setTime((time) => time - 1);
        }, 1000);
      }, 4000);
    }
  }, [time]);

  function clearPositions() {
    grayRef.current.clearBets();
    redRef.current.clearBets();
    blueRef.current.clearBets();
    goldRef.current.clearBets();
  }

  function getCurrentBet() {
    return bet;
  }

  return(
    <div className={styles.rouletteLayout}>
      <div className={styles.rouletteContainer}>
        <div className={styles.roulette}>
          <div className={styles.marker}></div>
          <canvas id="myCanvas" className={styles.canvas}></canvas>
          <div className={styles.countdown}>
            {time}
          </div>
        </div>
        <div className={styles.betManager}>
          <RollHistory rolls={rolls}/>
          <BetManager currentBet={bet} setBetHandler={setBet}/>
        </div>
      </div>
      <div className={styles.positionsLayout}>
        <BetPosition getBet={getCurrentBet} color={"gray"} ref={grayRef}/>
        <BetPosition getBet={getCurrentBet} color={"red"} ref={redRef}/>
        <BetPosition getBet={getCurrentBet} color={"blue"} ref={blueRef}/>
        <BetPosition getBet={getCurrentBet} background={"rgba(255, 215, 0, 0.1)"} color={"rgba(255, 215, 0, 1)"} ref={goldRef}/>
      </div>
    </div>
  )
}

export default Roulette;