import React from "react";

const FeedbackOptions = (props) => {
  const { options, onLeaveFeedback } = props;
  return (
    <div>
      {options.map((option) => (
        <button key={option.key} id={option.id} onClick={onLeaveFeedback}>
          {option.name}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
