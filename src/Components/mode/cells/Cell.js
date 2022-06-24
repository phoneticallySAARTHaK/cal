function Cell(props) {
  return (
    <div className={`cell ${props?.className || "date-cell"}`}>
      {props.children}
    </div>
  );
}

export default Cell;
