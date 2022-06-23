const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const hours = [...Array(24).keys()];

const dateIncrement = (date, limit) => {
  let next = (date + 1) % limit;
  return next === 0 ? limit : next;
};

function getDayName(date, format) {
  return date.toLocaleDateString("en-US", { weekday: format });
}

export { days, months, dateIncrement, hours, getDayName };
