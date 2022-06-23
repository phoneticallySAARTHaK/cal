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

function isDateEqual(date1, date2) {
  console.log(
    date1.toLocaleDateString("en-US", { dateStyle: "short" }) ===
      date2.toLocaleDateString("en-US", { dateStyle: "short" })
  );
  return (
    date1.toLocaleDateString("en-US", { dateStyle: "short" }) ===
    date2.toLocaleDateString("en-US", { dateStyle: "short" })
  );
}

export { days, months, dateIncrement, hours, getDayName, isDateEqual };
