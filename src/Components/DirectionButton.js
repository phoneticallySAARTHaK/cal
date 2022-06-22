function DirectionButton(props) {
  return <button className={`dir-btn ${props.dir}`} onClick={props.move} />;
}

export default DirectionButton;
