import DirectionButton from "./DirectionButton";
import Display from "./Display";
import Mode from "./Mode";

function Navbar(props) {
  return (
    <nav>
      <Mode />
      <DirectionButton dir="left" />
      <Display />
      <DirectionButton dir="right" />
      <button className="btn search" />
      <button className="btn sidebar-toggle" />
    </nav>
  );
}

export default Navbar;
