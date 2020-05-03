import React from "react";
import PropTypes from "prop-types";
import styles from "./beer.module.css";

function Beer(props) {
  const onClickHandler = (ev) => {
    ev.preventDefault();
    props.onClickSell(props.id);
  };

  let stock;
  if (props.pint < 1) stock = <p>Out of stock</p>;
  else if (props.pint < 10) stock = <p>Almost Empty</p>;

  return (
    <React.Fragment>
      <div
        className={styles.beer}
        onClick={() => props.whenBeerClicked(props.id)}
      >
        <h3 className={styles.h3}>{props.name}</h3>
        <p className={styles.brand}>{props.brand}</p>

        <p>{props.abv}% ABV</p>
        <p>{props.pint}</p>
        {stock}
      </div>
      <div className={styles.beer}>
        <button
          className={styles.sell}
          onClick={onClickHandler}
          disabled={props.pint < 1}
        >
          Sell
        </button>
      </div>
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
  pint: PropTypes.number,
};

export default Beer;
