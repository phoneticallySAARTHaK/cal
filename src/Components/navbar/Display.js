function Display(props) {
  return (
    <div className="display">
      <span>{`${props.first} ${props.sep} ${props.last}`}</span>
    </div>
  );
}

export default Display;
