import { useState } from "react";

function EventForm(props) {
  const [isEnd, setEnd] = useState(true);
  const id = isEnd ? "End" : "Range";

  function toggle(e) {
    e.preventDefault();
    setEnd((state) => !state);
  }

  return (
    <form>
      <div className="title-row">
        <label htmlFor="title">Title</label>
        <input
          tyepe="text"
          required
          id="title"
          placeholder="Enter event title..."
        />
      </div>

      <div className="start-row">
        <label htmlFor="start">Start</label>
        <input id="start" type="number" min="0" max="24" />
      </div>

      <div>
        <label htmlFor={id}>{id}</label>
        <input id="{id}" type="number" min="0" max="24" />
      </div>
      <div className="button-row">
        <button type="button " onClick={toggle}>
          {`Use ${isEnd ? "range" : "end"}`}
        </button>
        <button type="submit">Add event</button>
      </div>
    </form>
  );
}

export default EventForm;
