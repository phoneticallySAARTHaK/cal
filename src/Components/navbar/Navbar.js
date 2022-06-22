import DirectionButton from "../DirectionButton";
import Mode from "./Mode";

function Navbar(props) {
  return (
    <nav>
      <Mode />
      <DirectionButton move={() => ""} dir="left" />
      <button></button>
      <DirectionButton move={() => ""} dir="right" />
      <button></button>
      <button></button>
    </nav>
  );
}

export default Navbar;
