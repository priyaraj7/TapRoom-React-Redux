import React from "react";
import PropTypes from "prop-types";
import styles from "./beer.module.css";

function BeerDetail(props) {
  const { beer, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div className={styles.detail}>
        <h1 className={styles.h1}>Beer Details</h1>
        <h2 className={styles.h2}>{beer.name}</h2>
        <p className={styles.brand}> {beer.brand}</p>
        <p>
          <em>{beer.abv}% ABV</em>
        </p>
        <p>
          <b>Price: </b>${beer.price}
        </p>
        <p>
          <b>Pint: </b>
          {beer.pint}
        </p>
        <p>
          <b>Description: </b>
          {beer.description}
        </p>

        <button onClick={props.onClickingEdit}>Edit</button>
        <button onClick={() => onClickingDelete(beer.id)}>Delete</button>
        <hr />
      </div>
    </React.Fragment>
  );
}

BeerDetail.propTypes = {
  beer: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  price: PropTypes.number,
  pint: PropTypes.number,
  description: PropTypes.string,
};

export default BeerDetail;
