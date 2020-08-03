import React from "react";

const Statistics = ({ good, bad, neutral, total, positiveFeedback }) => {
  return (
    <div>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive feedback: <span>{positiveFeedback}</span>
      </p>
    </div>
  );
};

export default Statistics;
