import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input required type="text" name="name" placeholder="Beer Name" />
        <input required type="text" name="brand" placeholder="Brand" />
        <input
          required
          type="number"
          name="abv"
          placeholder="Alcohol Content"
        />
        <input required type="number" name="price" placeholder="Price" />
        <input required type="number" name="pint" placeholder="Pints" />
        <textarea name="description" placeholder="Description." />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
