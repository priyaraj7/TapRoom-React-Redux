import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import styles from "./beer.module.css";

function EditNewBeer(props) {
  const { beer } = props;

  function handleEditBeerFormSubmission(event) {
    event.preventDefault();
    props.onEditBeer({
      name: event.target.name.value,
      brand: event.target.brand.value,
      abv: Number.parseFloat(event.target.abv.value),
      price: Number.parseFloat(event.target.price.value),
      pint: Number.parseInt(event.target.pint.value, 10),
      description: event.target.description.value,
      id: beer.id,
    });
  }

  return (
    <React.Fragment>
      <div className={styles.edit}>
        <h2>Edit Beer Form</h2>
        <ReusableForm
          formSubmissionHandler={handleEditBeerFormSubmission}
          buttonText="Update"
        />
      </div>
    </React.Fragment>
  );
}

EditNewBeer.propTypes = {
  onEditBeer: PropTypes.func,
};

export default EditNewBeer;
