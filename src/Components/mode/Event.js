function Event(props) {
  return (
    <div className="event">
      <p>{props.title}</p>
      <p>
        {props.start} - {props.end}
      </p>
    </div>
  );
}

export default Event;
