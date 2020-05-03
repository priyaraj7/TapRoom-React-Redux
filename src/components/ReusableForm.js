import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import styles from "./beer.module.css";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className={styles.form}>
        <Form onSubmit={props.formSubmissionHandler}>
          <Form.Group>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Beer Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              required
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              required
              type="number"
              name="abv"
              placeholder="Alcohol Content"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              required
              type="number"
              name="price"
              placeholder="Price"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              required
              type="number"
              name="pint"
              min="1"
              max="124"
              placeholder="Pints"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              required
              name="description"
              placeholder="Description."
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {props.buttonText}
          </Button>
        </Form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,

  buttonText: PropTypes.string,
};

export default ReusableForm;
