import React from "react";

const Choice = ({ ingredient, add, remove }) => {
  const ingCSS = `ingredient ${ingredient}`;
  const capIng = ingredient.charAt(0).toUpperCase() + ingredient.substring(1);

  return (
    <div className="choice">
      <div className="ingToken">
        <img className={ingCSS} />
      </div>
      <div className="name">
        <p>{capIng}</p>
      </div>

      <div className="select">
        <button onClick={remove} value={ingredient}>
          -
        </button>
        <button onClick={add} value={ingredient}>
          +
        </button>
      </div>
    </div>
  );
};

export default Choice;
