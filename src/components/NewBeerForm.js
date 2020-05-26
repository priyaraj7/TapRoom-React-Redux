import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewBeerForm(props) {
  function handleNewBeerFormSubmission(event) {
    event.preventDefault();

    props.onNewBeerCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      abv: Number.parseFloat(event.target.abv.value),
      price: Number.parseFloat(event.target.price.value),
      pint: Number.parseInt(event.target.pint.value, 10),
      description: event.target.description.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <h2>Add Beer</h2>
      <ReusableForm
        formSubmissionHandler={handleNewBeerFormSubmission}
        buttonText="Submit!"
      />
      <br />
    </React.Fragment>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func,
};

export default NewBeerForm;
