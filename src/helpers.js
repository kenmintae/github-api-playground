export const convertTimestampToDate = timestamp => {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let date = new Date(timestamp);
  let day = date.getDate();
  let monthIndex = date.getMonth();
  let month = monthNames[monthIndex];
  let hours = date.getHours() || 0;
  let cleanHours;
  if (hours === 0) {
    cleanHours = 12;
  } else {
    cleanHours = hours > 12 ? hours - 12 : hours;
  }
  let minutes = date.getMinutes();
  minutes = minutes >= 10 ? minutes : "0" + minutes.toString();
  let ampm = hours >= 12 ? "pm" : "am";
  return `${month} ${day} at ${cleanHours}:${minutes}${ampm}`;
};

export const truncate = (str, length) => {
  if (str.length <= length) {
    return str;
  }
  const subString = str.substr(0, length);
  return subString.substr(0, subString.lastIndexOf(" ")) + "…";
};
