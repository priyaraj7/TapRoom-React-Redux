import React from "react";
import PropTypes from "prop-types";

function Beer(props) {
  const onClickHandler = (ev) => {
    ev.preventDefault();
    props.onClickSell(props.id);
  };
  return (
    <React.Fragment>
      <div onClick={() => props.whenBeerClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.brand}</p>

        <p>
          <em>{props.abv}% ABV</em>
        </p>
        {props.pint < 1 ? <p>Out of stock</p> : <p>Qty: {props.pint} pint</p>}
        {props.pint <= 10 ? <p>Almost Empty</p> : " "}
      </div>

      <button onClick={onClickHandler}>Sell</button>

      <hr />
    </React.Fragment>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  abv: PropTypes.number,
  id: PropTypes.string,
  whenBeerClicked: PropTypes.func,
  onClickSell: PropTypes.func,
};

export default Beer;
