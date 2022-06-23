import { useContext } from "react";
import { DateContext, ModeContext } from "../../Context";

function DirectionButton(props) {
  const mode = useContext(ModeContext)[0];
  const setDate = useContext(DateContext)[1];
  return (
    <button
      className={`btn ${props.dir}`}
      onClick={() => setDate({ mode: mode, dir: props.dir })}
    />
  );
}

export default DirectionButton;
