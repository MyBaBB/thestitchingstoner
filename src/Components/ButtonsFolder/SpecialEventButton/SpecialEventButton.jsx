import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./SpecialEventButton.css"; 

const SpecialEventButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // 750ms grace period to bridge the gap comfortably
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 750);
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div
      className="special-event-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Trigger Button */}
      <button className="special-event-btn">
        🌈 Gatherings 👀 
      </button>

      {/* Dropdown Accordion Menu - Opens downward & extends to the left */}
      {isOpen && (
        <div className="events-dropdown-menu">
          {/* Past Events Accordion */}
          <div className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => toggleSection("past")}
            >
              <span>Past Events</span>
              {activeSection === "past" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {activeSection === "past" && (
              <div className="accordion-content">
                <Link
                  to="/specialEvent"
                  className="event-link"
                  data-tool-tip="🔊 Hear Music !"
                >
                  Sept 4-7th Hookahville 62
                </Link>

                <Link
                  to="/specialevent2"
                  className="event-link"
                  data-tool-tip="Click to view the Event!"
                >
                  9-11 Good People Good Times
                </Link>
              </div>
            )}
          </div>

          {/* Future Events Accordion */}
          <div className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => toggleSection("future")}
            >
              <span>Future Events</span>
              {activeSection === "future" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {activeSection === "future" && (
              <div className="accordion-content">
                <Link
                  to="/gorilla"
                  className="event-link"
                  data-tool-tip="Click to view the Event!"
                >
                  🚀 NEW STUFF
                </Link>

                <p className="no-events-text">
                  Stay tuned for upcoming grooves! 🌻
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialEventButton;