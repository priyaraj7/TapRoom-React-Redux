import React from "react";
import NewBeerForm from "./NewBeerForm";
import BeerList from "./BeerList";
import BeerDetail from "./BeerDetail";
import EditBeerForm from "./EditBeerForm";
import { connect } from "react-redux";

class BeerControl extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   formVisibleOnPage: false,
    //   masterBeerList: [...masterBeerList],
    //   selectedBeer: null,
    //   editing: false,
    // };
  }
  // handleClick = () => {
  //   if (this.state.selectedBeer != null) {
  //     this.setState({
  //       formVisibleOnPage: false,
  //       selectedBeer: null,
  //       editing: false,
  //     });
  //   } else {
  //     this.setState((prevState) => ({
  //       formVisibleOnPage: !prevState.formVisibleOnPage,
  //     }));
  //   }
  // };

  // handleAddingNewBeerToList = (newBeer) => {
  //   const newMasterBeerList = this.state.masterBeerList.concat(newBeer);
  //   this.setState({
  //     masterBeerList: newMasterBeerList,
  //     formVisibleOnPage: false,
  //   });
  // };

  // handleChangingSelectedBeer = (id) => {
  //   const selectedBeer = this.state.masterBeerList.filter(
  //     (beer) => beer.id === id
  //   )[0];
  //   this.setState({ selectedBeer: selectedBeer });
  // };

  // handleDeletingBeer = (id) => {
  //   const newMasterBeerList = this.state.masterBeerList.filter(
  //     (beer) => beer.id !== id
  //   );
  //   this.setState({
  //     masterBeerList: newMasterBeerList,
  //     selectedBeer: null,
  //   });
  // };

  // handleEditClick = () => {
  //   console.log("handleEditClick reached!");
  //   this.setState({ editing: true });
  // };

  // handleEditingBeerInList = (beerToEdit) => {
  //   const editedMasterBeerList = this.state.masterBeerList
  //     .filter((beer) => beer.id !== this.state.selectedBeer.id)
  //     .concat(beerToEdit);
  //   this.setState({
  //     masterBeerList: editedMasterBeerList,
  //     editing: false,
  //     selectedBeer: null,
  //   });
  // };
  // // ......sell.......
  // handleSellBeer = (beerTosell) => {
  //   const sellBeer = this.state.masterBeerList.map((beer) => {
  //     if (beer.id !== beerTosell) {
  //       return beer;
  //     }
  //     return {
  //       ...beer,
  //       pint: parseInt(beer.pint) - 1,
  //     };
  //   });
  //   this.setState({
  //     masterBeerList: sellBeer,
  //     editing: false,
  //     selectedBeer: null,
  //   });
  // };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonAction = null;

    // if (this.state.editing) {
    //   currentlyVisibleState = (
    //     <EditBeerForm
    //       beer={this.state.selectedBeer}
    //       onEditBeer={this.handleEditingBeerInList}
    //     />
    //   );
    //   buttonText = "Return to detail page";
    // } else if (this.state.selectedBeer != null) {
    //   currentlyVisibleState = (
    //     <BeerDetail
    //       beer={this.state.selectedBeer}
    //       onClickingDelete={this.handleDeletingBeer}
    //       onClickingEdit={this.handleEditClick}
    //     />
    //   );
    //   buttonText = "Return to Beer List";
    // } else
    if (this.props.formVisibleOnPage === "addForm") {
      currentlyVisibleState = (
        <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />
      );
      buttonText = "Return to Beer List";
    } else {
      currentlyVisibleState = (
        <BeerList
          beerList={this.props.masterBeerList}
          // onBeerSelection={this.handleChangingSelectedBeer}
          // onClickSell={this.handleSellBeer}
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
const mapStateToProp = (state) => ({
  masterBeerList: state.masterBeerList,
  formVisibleOnPage: state.formVisibleOnPage,
});

export default connect(mapStateToProp)(BeerControl);
