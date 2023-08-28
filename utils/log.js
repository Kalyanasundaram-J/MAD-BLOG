const fs = require("fs");
function log(error) {
  let errorLogDetail = "";
  try {
    errorLogDetail = `${timeStamp()} [ ${
      error.code ?? "No-Code"
    }] ${error.message ?? "Message also missing"}\n${error.toString()}\n`;
    fs.appendFileSync(".log", errorLogDetail);
    return true;
  } catch (error) {
    return fs.appendFileSync(".log", error.toString());
  }
}

function timeStamp() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const timestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return timestamp
}

module.exports = log;
