const hours = [...Array(24).keys()];

const days = [...Array(7).keys()];

const months = [...Array(12).keys()];

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
  let newDate = new Date(date.valueOf());
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

const getDayName = (date, format) =>
  date.toLocaleDateString("en-US", { weekday: format });

const getShortDate = (date) =>
  date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });

const getMediumDate = (date) =>
  date.toLocaleDateString("en-US", {
    dateStyle: "medium",
  });

const getMonth = (date) =>
  date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

const getYear = (date) => date.toLocaleDateString("en-US", { year: "numeric" });

const isDateEqual = (date1, date2) =>
  date1.toLocaleDateString() === date2.toLocaleDateString();

const resetWeekday = (date) => addDays(date, -date.getDay());

const resetMonthDay = (date) => addDays(date, -date.getDate());

const inBetween = (from, test, to) => from <= test && test <= to;

export {
  days,
  months,
  hours,
  addDays,
  nextDay,
  nextWeek,
  prevDay,
  prevWeek,
  nextMonth,
  prevMonth,
  nextYear,
  prevYear,
  getDayName,
  getShortDate,
  getMediumDate,
  getMonth,
  getYear,
  isDateEqual,
  resetWeekday,
  resetMonthDay,
  inBetween,
};
