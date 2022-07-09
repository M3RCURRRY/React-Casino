import { useEffect, useRef, useState } from "react";
import BetManager from "../../BetManager/BetManager";
import BetPosition from "../../BetPosition/BetPosition";
import styles from "./Roulette.module.css";

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

let rotated = false;

function spinWheel () {
  var div = document.getElementById('myCanvas'),
    deg = rotated ? 0 : 928;

  let ctx = div.getContext('2d');
  ctx.rotate(45 * Math.PI / 180);

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

  const [grayBets, setGrayBets] = useState({});
  const [redBets, setRedBets] = useState({});
  const [blueBets, setBlueBets] = useState({});
  const [goldBets, setGoldBets] = useState({});

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

  function clearPositions() {
    
  }

  function setPosition(pos) {
    switch (pos) {
      case "gray":
        setGrayBets(Object.assign(grayBets, {"User": bet}));
        break;
      case "red":
        setRedBets(Object.assign(redBets, {"User": bet}));
        break;
      case "blue":
        setBlueBets(Object.assign(blueBets, {"User": bet}))
        break;
      case "gold":
        setGoldBets(Object.assign(goldBets, {"User": bet}))
        break;
      default:      
        break;
    }
  }

  return(
    <div className={styles.rouletteLayout}>
      <div className={styles.rouletteContainer}>
        <div className={styles.roulette}>
          <div className={styles.marker}></div>
          <canvas id="myCanvas"></canvas>
          <div className={styles.countdown}>
            {time}
          </div>
        </div>
        <div className={styles.betManager}>
          <BetManager currentBet={bet} setBetHandler={setBet}/>
        </div>
      </div>
      <div className={styles.positionsLayout}>
        <BetPosition currentBet={bet} color={"gray"} handler={() => setPosition("gray")}/>
        <BetPosition currentBet={bet} color={"red"} handler={() => setPosition("red")}/>
        <BetPosition currentBet={bet} color={"blue"} handler={() => setPosition("blue")}/>
        <BetPosition currentBet={bet} background={"rgba(255, 215, 0, 0.1)"} color={"rgba(255, 215, 0, 1)"} handler={() => setPosition("gold")}/>
      </div>
    </div>
  )
}

export default Roulette;