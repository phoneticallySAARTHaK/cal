import { useContext } from "react";
import { EventContext } from "../../../Context";

function Cell(props) {
  const setsidebarState = useContext(EventContext);

  return (
    <div
      className={`cell ${props?.className || "date-cell"}`}
      onDoubleClick={() =>
        setsidebarState({ date: props.date, isVisible: true })
      }
    >
      {props.children}
    </div>
  );
}

export default Cell;
