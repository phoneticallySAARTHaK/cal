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

const addDays = (date, days) => {
  let newDate = date;
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

const nextDate = (date) => addDays(date, 1);

const prevDay = (date) => addDays(date, -1);

const nextWeek = (date) => addDays(date, 7);

const prevWeek = (date) => addDays(date, -7);

function getDayName(date, format) {
  return date.toLocaleDateString("en-US", { weekday: format });
}

function isDateEqual(date1, date2) {
  return date1.toLocaleDateString() === date2.toLocaleDateString();
}

export {
  days,
  months,
  hours,
  getDayName,
  isDateEqual,
  nextWeek,
  nextDate,
  prevDay,
  prevWeek,
};
