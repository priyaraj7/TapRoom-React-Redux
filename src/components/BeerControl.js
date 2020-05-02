import React from "react";
import NewBeerForm from "./NewBeerForm";
import BeerList from "./BeerList";
import BeerDetail from "./BeerDetail";
import EditBeerForm from "./EditBeerForm";

class BeerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBeerList: [],
      selectedBeer: null,
      editing: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    if (this.state.selectedBeer != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewBeerToList = (newBeer) => {
    const newMasterBeerList = this.state.masterBeerList.concat(newBeer);
    this.setState({
      masterBeerList: newMasterBeerList,
      formVisibleOnPage: false,
    });
  };

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.state.masterBeerList.filter(
      (beer) => beer.id === id
    )[0];
    this.setState({ selectedBeer: selectedBeer });
  };

  handleDeletingBeer = (id) => {
    const newMasterBeerList = this.state.masterBeerList.filter(
      (beer) => beer.id !== id
    );
    this.setState({
      masterBeerList: newMasterBeerList,
      selectedBeer: null,
    });
  };

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleEditingBeerInList = (beerToEdit) => {
    const editedMasterBeerList = this.state.masterBeerList
      .filter((beer) => beer.id !== this.state.selectedBeer.id)
      .concat(beerToEdit);
    this.setState({
      masterBeerList: editedMasterBeerList,
      editing: false,
      selectedBeer: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditBeerForm
          beer={this.state.selectedBeer}
          onEditBeer={this.handleEditingBeerInList}
        />
      );
      buttonText = "Return to Beer List";
    } else if (this.state.selectedBeer != null) {
      currentlyVisibleState = (
        <BeerDetail
          beer={this.state.selectedBeer}
          onClickingDelete={this.handleDeletingBeer}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Beer List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />
      );
      buttonText = "Return to Beer List";
    } else {
      currentlyVisibleState = (
        <BeerList
          beerList={this.state.masterBeerList}
          onBeerSelection={this.handleChangingSelectedBeer}
        />
      );

      buttonText = "Add Beer";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default BeerControl;
