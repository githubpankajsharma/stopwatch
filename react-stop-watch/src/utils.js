export function secondsToHMS(d) {
    d = Number(d);
    var hours = Math.floor(d / 3600);
    var mins = Math.floor((d % 3600) / 60);
    var secs = Math.floor((d % 3600) % 60);
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }
    return { hours, mins, secs };
  }
  export function getDigitalTimeString(hmsObj = {}) {
    return `${hmsObj.hours}:${hmsObj.mins}:${hmsObj.secs}`;
  }
  