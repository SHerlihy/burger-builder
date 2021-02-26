import React from "react";

const Choice = ({ ingredient, add, remove }) => {
  const ingCSS = `ingredient ${ingredient}`;

  return (
    <div className="choice">
      <div className="ingToken">
        <img className={ingCSS} />
      </div>
      <p>{ingredient}</p>
      <div>
        <button onClick={add} value={ingredient}>
          +
        </button>
        <button onClick={remove} value={ingredient}>
          -
        </button>
      </div>
    </div>
  );
};

export default Choice;
