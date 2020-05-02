import React from "react";
import PropTypes from "prop-types";

function Beer(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenBeerClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.brand}</p>

        <p>
          <em>{props.abv}% ABV</em>
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  abv: PropTypes.number,
  id: PropTypes.string,
  whenBeerClicked: PropTypes.func,
};

export default Beer;
