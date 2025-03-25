function sumVideoTimes(timesArray) {
  let totalSeconds = 0;
  timesArray.forEach((time) => {
    let parts = time.split(":").map(Number);
    let seconds = 0;
    if (parts.length === 3) {
      seconds = parts[0] * 3600 + parts[1] * 60 + parts[2]; // hh:mm:ss
    } else if (parts.length === 2) {
      seconds = parts[0] * 60 + parts[1]; // mm:ss
    }
    totalSeconds += seconds;
  });
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
// Example Usage:
let videoTimes = ["12:30", "01:45", "00:50", "2:15:30"]; // mm:ss and hh:mm:ss formats
console.log(sumVideoTimes(videoTimes)); // Output: "02:30:35"
videoTimes = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
sumVideoTimes(videoTimes);