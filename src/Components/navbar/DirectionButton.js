import { useContext } from "react";
import { DateContext } from "../../Context";

function DirectionButton(props) {
  const [state, dispatch] = useContext(DateContext);
  return (
    <button
      className={`btn ${props.dir}`}
      onClick={() => dispatch({ ...state, dir: props.dir })}
    />
  );
}

export default DirectionButton;
