function Event(props) {
  const end = new Date(props.date.valueOf());
  end.setHours(props.date.getHours() + props.range);
  return (
    <div className="event">
      <p>{props.title}</p>
      <p>
        {props.date.getHours()}:00 - {end.getHours()}:00
      </p>
    </div>
  );
}

export default Event;
