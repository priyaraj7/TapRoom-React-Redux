import React from "react";
import NewBeerForm from "./NewBeerForm";
import BeerList from "./BeerList";
import BeerDetail from "./BeerDetail";
import EditBeerForm from "./EditBeerForm";
import { connect } from "react-redux";
import {
  editBeer,
  showDetailPage,
  addBeer,
  showAddForm,
  showListPage,
  updateBeer,
  removeBeer,
  sellBeer,
} from "../actions";

const BeerControl = (props) => {
  const handleClick = () => {
    if (props.currentPage === "BEER_LIST") {
      props.showAddForm();
    } else if (props.currentPage === "updateForm") {
      props.showDetailPage(props.selectedBeer);
    } else {
      props.showListPage();
    }
  };
  let currentlyVisibleState = null;
  let buttonText = null;
  const selectedBeer = props.masterBeerList.find(
    (b) => b.id === props.selectedBeer
  );

  if (props.selectedBeer != null && props.currentPage === "updateForm") {
    currentlyVisibleState = (
      <EditBeerForm beer={selectedBeer} onEditBeer={props.updateBeer} />
    );
    buttonText = "Return to detail page";
  } else if (props.selectedBeer != null && props.currentPage === "detailPage") {
    currentlyVisibleState = (
      <BeerDetail
        beer={selectedBeer}
        onClickingDelete={props.deleteBeer}
        onClickingEdit={props.editBeer}
      />
    );
    buttonText = "Return to Beer List";
  } else if (props.currentPage === "addForm") {
    currentlyVisibleState = <NewBeerForm onNewBeerCreation={props.addBeer} />;
    buttonText = "Return to Beer List";
  } else {
    currentlyVisibleState = (
      <BeerList
        beerList={props.masterBeerList}
        onBeerSelection={props.showDetailPage}
        onClickSell={props.sellBeer}
      />
    );

    buttonText = "Add Beer";
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
};

const mapStateToProp = (state) => ({
  masterBeerList: state.masterBeerList,
  currentPage: state.formVisibleOnPage.currentPage,
  selectedBeer: state.formVisibleOnPage.selectedBeer,
});

const mapActionToProps = (dispatch) => ({
  showDetailPage: (id) => {
    dispatch(showDetailPage(id));
  },
  showAddForm: () => {
    dispatch(showAddForm());
  },
  showListPage: () => {
    dispatch(showListPage());
  },
  addBeer: (beer) => {
    dispatch(addBeer(beer));
    dispatch(showListPage());
  },
  editBeer: (id) => {
    dispatch(editBeer(id));
  },
  updateBeer: (beer) => {
    dispatch(updateBeer(beer));
    dispatch(showListPage());
  },
  deleteBeer: (id) => {
    dispatch(removeBeer(id));
    dispatch(showListPage());
  },
  sellBeer: (id) => {
    dispatch(sellBeer(id));
    dispatch(showListPage());
  },
});

export default connect(mapStateToProp, mapActionToProps)(BeerControl);
