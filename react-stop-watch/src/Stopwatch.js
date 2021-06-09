import React from "react";
//import { secondsToHMS, getDigitalTimeString } from "./utils";
//import CommonList from "../src/components/CommonList/CommonList";
//import config from "./config";
//import "./Stopwatch.css";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondElapsed: 0,
      status: -1
    };
    this.laps = [];
    this.intervalVal = -1;
  }

  componentDidMount() {
    var { autostart } = this.props;
    if (autostart) {
      this.startTimer();
    }
  }

  myTimer = () => {
    const { secondElapsed } = this.state;
    this.setState({
      secondElapsed: secondElapsed + 1
    });
  };

//   startTimer = () => {
//     if (this.intervalVal === -1) {
//       this.intervalVal = setInterval(this.myTimer, 1000);
//       this.setState({
//         status: 1
//       });
//       this.executeCb();
//     }
//   };

//   stopTimer = () => {
//     if (this.intervalVal !== -1) {
//       clearInterval(this.intervalVal);
//       this.intervalVal = -1;
//       this.setState({
//         status: 0
//       });
//       this.executeCb();
//     }
//   };

//   addToLap = () => {
//     if (this.intervalVal !== -1) {
//       const timeStr = getDigitalTimeString(this.hmsObj);
//       if (this.laps.indexOf(timeStr) < 0) {
//         this.laps.push(timeStr);
//         this.executeCb();
//       }
//     }
//   };

//   resetWatch = () => {
//     const { secondElapsed } = this.state;
//     if (secondElapsed > 0) {
//       this.stopTimer();
//       this.laps.length = 0;
//       this.setState({
//         secondElapsed: 0,
//         status: -1
//       });
//       this.executeCb();
//     }
//   };

//   executeCb = () => {
//     const { cb } = this.props;
//     if (typeof cb === "function") {
//       cb({ type: this.btnType });
//     }
//   };

//   btnHandler = (e) => {
//     this.btnType = e.target.dataset.type;
//     switch (this.btnType) {
//       case "start":
//         this.startTimer();
//         break;
//       case "stop":
//         this.stopTimer();
//         break;
//       case "lap":
//         this.addToLap();
//         break;
//       case "reset":
//         this.resetWatch();
//         break;
//       default:
//     }
//   };

  render() {
    const { secondElapsed, status } = this.state;
    this.hmsObj = secondsToHMS(secondElapsed);
    return null;
    //return (
    //   <div className="stopwatchBlk">
    //     <div className="timerBox">
    //       <span>{this.hmsObj.hours}</span>
    //       <span>{this.hmsObj.mins}</span>
    //       <span>{this.hmsObj.secs}</span>
    //     </div>
    //     <div className="btnControls" onClick={this.btnHandler}>
    //       {config.btns.map((btn) => {
    //         var disabled =
    //           (btn.type !== "start" && status === -1) ||
    //           (btn.type === "start" && status === 1) ||
    //           (btn.type === "lap" && status !== 1);
    //         return (
    //           <button data-type={btn.type} disabled={disabled}>
    //             {btn.label}
    //           </button>
    //         );
    //       })}
    //     </div>
    //     {this.laps.length > 0 && (
    //       <div className="lapBox">
    //         <CommonList listItems={this.laps} />
    //       </div>
    //     )}
    //   </div>
    //);
  }
}
export default Stopwatch;
