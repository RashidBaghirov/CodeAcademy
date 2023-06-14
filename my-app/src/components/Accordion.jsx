import React, { useState } from "react";

function Accordion({ title, content, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const targetId = `collapse${index}`;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleAccordion}
          data-bs-toggle="collapse"
          data-bs-target={`#${targetId}`}
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls={targetId}
        >
          {title}
        </button>
      </h2>
      <div
        id={targetId}
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;

