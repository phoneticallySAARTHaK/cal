import { useContext } from "react";
import { Context } from "../../Context";

function DirectionButton(props) {
  const [state, dispatch] = useContext(Context);
  return (
    <button
      className={`btn ${props.dir}`}
      onClick={() => dispatch({ ...state, dir: props.dir })}
    />
  );
}

export default DirectionButton;
