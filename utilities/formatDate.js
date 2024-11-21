const moment = require("moment");

const formatTime = (time) => {
  let result = moment(time, "hh:mm").format("hh:mm a");
  return result;
};

module.exports = {
  formatTime,
};
