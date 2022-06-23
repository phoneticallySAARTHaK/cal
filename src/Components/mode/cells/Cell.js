function Cell(props) {
  return <div className={`cell ${props.className}`}>{props.children}</div>;
}

export default Cell;
