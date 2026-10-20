import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Weed.css";
import weedGif from "../../Images/Weed.gif"; // adjust path as needed

const Weed = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const timeoutRef = useRef(null);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const resetInactivityTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    // Auto-close after 2 seconds of inactivity
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveSection(null);
    }, 2000);
  };

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      resetInactivityTimer();
    } else {
      setIsOpen(false);
      setActiveSection(null);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
    resetInactivityTimer();
  };

  return (
    <div className="weed-container">
      {/* Clickable Mobile Trigger */}
      <div 
        className="weed-leaf" 
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
      >
        <img src={weedGif} alt="weed gif" className="object-contain" />
        <div className="pointer-events-none absolute inset-0 bg-black/20"></div>
      </div>

      {/* Centered Dropdown Menu Dropping Down from Top */}
      {isOpen && (
        <div 
          className="weed-dropdown-menu"
          onMouseEnter={resetInactivityTimer}
          onMouseMove={resetInactivityTimer}
          onClick={resetInactivityTimer}
        >
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
                  onClick={() => setIsOpen(false)}
                >
                  Sept 4-7th Hookahville 62
                </Link>

                <Link
                  to="/specialevent2"
                  className="event-link"
                  onClick={() => setIsOpen(false)}
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
                  onClick={() => setIsOpen(false)}
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

export default Weed;