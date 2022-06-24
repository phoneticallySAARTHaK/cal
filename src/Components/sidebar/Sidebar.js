import { useEffect, useRef, useState } from "react";
import Form from "./Form";

function Sidebar(props) {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  // below is the same as componentDidMount and componentDidUnmount
  //   https://stackoverflow.com/questions/54391682/detect-click-outside-component-react-hooks
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      event.stopPropagation();
      setIsVisible(false);
    }
  };

  return (
    isVisible && (
      <div className="sidebar" ref={wrapperRef}>
        <Form />
      </div>
    )
  );
}

export default Sidebar;
