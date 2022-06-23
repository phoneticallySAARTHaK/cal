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
  let newDate = new Date(date.valueOf());
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

const nextDay = (date) => addDays(date, 1);

const prevDay = (date) => addDays(date, -1);

const nextWeek = (date) => addDays(date, 7);

const prevWeek = (date) => addDays(date, -7);

const nextMonth = (date) => {
  let newDate = date;
  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
};

const prevMonth = (date) => {
  let newDate = new Date(date.valueOf());
  newDate.setMonth(newDate.getMonth() - 1);
  return newDate;
};

const nextYear = (date) => {
  let newDate = new Date(date.valueOf());
  newDate.setFullYear(newDate.getFullYear() + 1);
  return newDate;
};

const prevYear = (date) => {
  let newDate = new Date(date.valueOf());
  newDate.setFullYear(newDate.getFullYear() - 1);
  return newDate;
};

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
  nextDay,
  prevDay,
  prevWeek,
  nextMonth,
  prevMonth,
  nextYear,
  prevYear,
};
