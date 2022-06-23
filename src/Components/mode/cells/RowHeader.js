import Cell from "./Cell";

function RowHeader(props) {
  return (
    <Cell className="row-header">
      <p>{`${props.hour}:00`}</p>
    </Cell>
  );
}

export default RowHeader;
