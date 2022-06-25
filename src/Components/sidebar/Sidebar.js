import { useEffect, useRef } from "react";
import DateForm from "./DateForm";
import Form from "./EventForm";

function Sidebar(props) {
  const wrapperRef = useRef(null);

  // below is the same as componentDidMount and componentDidUnmount
  //   https://stackoverflow.com/questions/54391682/detect-click-outside-component-react-hooks
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      event.stopPropagation();
      props.setState({ ...props.date, isVisible: false });
    }
  };

  return (
    props.state.isVisible && (
      <div className="sidebar" ref={wrapperRef}>
        <h3>Event</h3>
        <DateForm date={props.state.date} />
        <Form />
      </div>
    )
  );
}

export default Sidebar;
