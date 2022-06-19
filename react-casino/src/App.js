import React from "react";
import "./App.css";
import Field from "./components/layout/Field/Field";
import Roulette from "./components/layout/Roulette/Roulette";
import blackNums from "./utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      row3: 0,
      row2: 0,
      row1: 0,
      odd: 0,
      even: 0,
      dozen1: 0,
      dozen2: 0,
      dozen3: 0,
      half1: 0,
      half2: 0,
      black: 0,
      red: 0,
      last: 0,
    };

    this.getRollResult = this.getRollResult.bind(this);
  }

  getRollResult(rollNumber) {
    const winnedRow = rollNumber % 3;
    if (rollNumber !== 0) {
      this.setState((prev) => ({
        row3: rollNumber % 3 === 0 ? 0 : prev.row3 + 1,
        row2: rollNumber % 3 === 2 ? 0 : prev.row2 + 1,
        row1: rollNumber % 3 === 1 ? 0 : prev.row1 + 1,
        odd: rollNumber % 2 === 1 ? 0 : prev.odd + 1,
        even: rollNumber % 2 === 0 ? 0 : prev.even + 1,
        dozen1: rollNumber < 13 ? 0 : prev.dozen1 + 1,
        dozen2: (rollNumber > 12 && rollNumber < 25) ? 0 : prev.dozen2 + 1,
        dozen3: rollNumber > 24 ? 0 : prev.dozen3 + 1,
        half1: rollNumber < 19 ? 0 : prev.half1 + 1,
        half2: rollNumber > 18 ? 0 : prev.half2 + 1,
        black: blackNums.has(rollNumber) ? 0 : prev.black + 1,
        red: !blackNums.has(rollNumber) ? 0 : prev.red + 1,
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <Field rollResult={this.state} />
        <Roulette onRolled={this.getRollResult} />
      </div>
    );
  }
}

export default App;
