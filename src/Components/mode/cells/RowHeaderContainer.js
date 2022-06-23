import HeaderCell from "./HeaderCell";
import RowHeader from "./RowHeader";
import { hours } from "../../../Utils/DateUtils";

function RowHeaderContainer(props) {
  return (
    <div className="row-header-container">
      <HeaderCell date={null} />
      {hours.map((hour) => (
        <RowHeader hour={hour} key={hour} />
      ))}
    </div>
  );
}

export default RowHeaderContainer;
