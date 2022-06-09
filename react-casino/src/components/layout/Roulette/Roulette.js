import React from "react";
import styles from "./Roulette.module.css";

import wheel from './roulette.png';
import inner from './inner.png';
import texture from './texture.png';
import border from './border.png';
import frame from './frame.png';

class Roulette extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.rouletteContainer}>
        <img src={frame}/>
        <img src={wheel}/>       
        <img src={inner}/>
        <img src={texture}/>
        <img src={border}/>
      </div>
    );
  }
}

export default Roulette;
