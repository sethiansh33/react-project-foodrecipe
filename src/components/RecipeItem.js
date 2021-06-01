import React from "react";

const RecipeItem = (props) => {
  const { name, image, ingredientLines } = props;
  return (
    <div className="card py-2 text-center">
      <img
        src={image}
        alt=""
        className="img-fluid w-50 mx-auto rounded-circle"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        {ingredientLines.map((ingredient, idx) => (
          <li className="list-group-item" key={idx}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeItem;
