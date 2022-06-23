function DirectionButton(props) {
  return <button className={`btn ${props.dir}`} onClick={props.move} />;
}

export default DirectionButton;
