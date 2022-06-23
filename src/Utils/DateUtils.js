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

function getShortDate(date) {
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  });
}

function getMediumDate(date) {
  return date.toLocaleDateString("en-US", {
    dateStyle: "medium",
  });
}

function getMonth(date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function getYear(date) {
  return date.toLocaleDateString("en-US", { year: "numeric" });
}

function isDateEqual(date1, date2) {
  return date1.toLocaleDateString() === date2.toLocaleDateString();
}

export {
  days,
  months,
  hours,
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
};
