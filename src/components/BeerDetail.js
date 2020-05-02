import React from "react";
import PropTypes from "prop-types";

function BeerDetail(props) {
  const { beer, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Beer Details</h1>
      <h3>{beer.names}</h3>
      <h2> {beer.brand}</h2>
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
        <b>Description: </b>${beer.description}
      </p>

      <button onClick={props.onClickingEdit}>Update Beer</button>
      <button onClick={() => onClickingDelete(beer.id)}>Close Beer</button>
      <hr />
    </React.Fragment>
  );
}

BeerDetail.propTypes = {
  beer: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
};

export default BeerDetail;
