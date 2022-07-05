import { useEffect, useRef, useState } from "react";
import BetManager from "../../BetManager/BetManager";
import styles from "./Roulette.module.css";

function renderCanvas() {
  let canvas = document.getElementById("myCanvas");


  canvas.width = 650;
  canvas.height = 650;

  let ctx = canvas.getContext("2d");

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

  drawPieSlice(ctx, 325,325,315, 0, Math.PI*2, "#151515");
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

let rotated = false;

function spinWheel () {
  var div = document.getElementById('myCanvas'),
    deg = rotated ? 0 : 1066;

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

  useEffect(() => {
    if (time < 1) {
      clearInterval(intervalRef.current);
      spinWheel(); 
      setTimeout(() => {
        setTime(5);
        intervalRef.current = setInterval(() => {
          setTime((time) => time - 1);
        }, 1000);
      }, 4000);
    }
  }, [time]);

  return(
    <div className={styles.rouletteLayout}>
      <div className={styles.rouletteContainer}>
        <div className={styles.roulette}>
          <canvas id="myCanvas"></canvas>
          <div className={styles.countdown}>
            {time}
          </div>
        </div>
        <div className={styles.betManager}>
          {/* <button onClick={renderCanvas}>Render</button>
          <button onClick={spinWheel}>Spin</button>
          <button onClick={() => setTime(time + 1)}>Get IntervalID</button> */}
          <BetManager/>
        </div>
      </div>
    </div>
  )
}

export default Roulette;