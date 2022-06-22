import DirectionButton from "../DirectionButton";
import Display from "./Display";
import Mode from "./Mode";

function Navbar(props) {
  return (
    <nav>
      <Mode />
      <DirectionButton move={props.left} dir="left" />
      <Display />
      <DirectionButton move={props.right} dir="right" />
      <button className="btn search" />
      <button className="btn sidebar-toggle" />
    </nav>
  );
}

export default Navbar;
