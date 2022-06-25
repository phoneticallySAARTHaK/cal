import { getMediumDate } from "../../Utils/DateUtils";

function DateForm(props) {
  return <h4>Event Date: {getMediumDate(props.date)}</h4>;
}

export default DateForm;
