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
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.abv.value);
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewBeerFormSubmission}
        buttonText="Submit!"
      />
    </React.Fragment>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func,
};

export default NewBeerForm;
