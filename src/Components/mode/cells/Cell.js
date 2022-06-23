function Cell(props) {
  return (
    <div className={`cell ${props.className}`} key={props.date}>
      {props.children}
    </div>
  );
}

export default Cell;
