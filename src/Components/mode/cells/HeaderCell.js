import Cell from "./Cell";
import { getDayName } from "../../../Utils/DateUtils";
import { useContext } from "react";
import { DateContext } from "../../../Context";

function getDayFormat(mode) {
  switch (mode) {
    case "day":
      return "long";
    case "week":
      return "short";
    case "month":
      return "narrow";
    default:
      return "";
  }
}

function HeaderCell(props) {
  const { mode } = useContext(DateContext)[0];
  const children = props.date ? (
    <>
      <p>{getDayName(props.date, getDayFormat(mode))}</p>
      {mode === "week" ? <p>{props.date.getDate()}</p> : null}
    </>
  ) : null;

  return <Cell className={`header-cell ${props.className}`}>{children}</Cell>;
}

export default HeaderCell;
