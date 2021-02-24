import React from "react";

const Choice = ({ ingredient }) => {
  const addChoiceHandler = () => {};
  const removeChoiceHandler = () => {};

  const ingCSS = `ingredient ${ingredient}`;

  return (
    <div className="choice">
      <div className="ingToken">
        <img className={ingCSS} />
      </div>
      <p>{ingredient}</p>
      <div>
        <button onClick={addChoiceHandler}>+</button>
        <button onClick={removeChoiceHandler}>-</button>
      </div>
    </div>
  );
};

export default Choice;
