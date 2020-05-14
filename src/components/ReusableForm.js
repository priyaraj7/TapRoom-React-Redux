import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import styles from "./beer.module.css";

class ReusableForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      brand: props.brand,
      price: props.price,
      pint: props.pint,
      description: props.description,
      abv: props.abv,
    };
  }

  setValue(propName, val) {
    this.setState({
      [propName]: val,
    });
  }
  render() {
    const { props, state } = this;
    return (
      <React.Fragment>
        <div className={styles.form}>
          <Form onSubmit={props.formSubmissionHandler}>
            <Form.Group>
              <Form.Control
                required
                type="text"
                name="name"
                onChange={(ev) => this.setValue("name", ev.target.value)}
                value={state.name}
                placeholder="Beer Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                type="text"
                name="brand"
                onChange={(ev) => this.setValue("brand", ev.target.value)}
                value={state.brand}
                placeholder="Brand"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                type="number"
                name="abv"
                value={state.abv}
                onChange={(ev) => this.setValue("abv", ev.target.value)}
                placeholder="Alcohol Content"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                type="number"
                name="price"
                onChange={(ev) => this.setValue("price", ev.target.value)}
                value={state.price}
                placeholder="Price"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                type="number"
                name="pint"
                value={state.pint}
                onChange={(ev) => this.setValue("pint", ev.target.value)}
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
                value={state.description}
                onChange={(ev) => this.setValue("description", ev.target.value)}
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
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
