import React from "react";
import NewBeerForm from "./NewBeerForm";
import BeerList from "./BeerList";
import BeerDetail from "./BeerDetail";
import EditBeerForm from "./EditBeerForm";
import { v4 } from "uuid";

const masterBeerList = [
  {
    name: "Gunbuster",
    brand: "Loowit Brewing Company",
    abv: 6.3,
    price: 120,
    pint: 124,
    description:
      "An easy drinking India Pale Ale featuring Simcoe, Cascade and Mosaic hops and a crisp, dry finish. Piney balanced with hints of citrus on the nose. Dry hopped on multiple occasions, including high krausen, and bunged before terminal gravity was reached to concentrate hop aroma and generate thick, creamy, aroma packed beer foam.",
    id: v4(),
  },
  {
    name: "Mo-haze-ic",
    brand: "Migration Brewing",
    abv: 6.1,
    price: 120,
    pint: 124,
    description:
      'bit aggressively hopped IPA, 3 pounds per barrel and over 20 pounds of Mosaics create a juicy, tropical hop delight. Only using a small late boil addition and heavy dry hop additions leaves this IPA with very little perceived bitterness and a juice explosion of hop flavor, loaded with berry, passion fruit, papaya, orange and tropical aromas. Domestic Two-row along with along with a high percentage of wheat create a pale, full-bodied ale that let the hops do all the work. This hazy will be sure to leave saying, "Gimme some mo!"',
    id: v4(),
  },
  {
    name: " Blood Orange IPA",
    brand: "Lucky Envelope Brewing",
    abv: 6.7,
    price: 120,
    pint: 124,
    description:
      "Blood Orange infused into Lucky Envelope's IPA for distinctly orange citrus notes complementing the base beer.",
    id: v4(),
  },
];

class BeerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBeerList: [...masterBeerList],
      selectedBeer: null,
      editing: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    // debugger;
    if (this.state.selectedBeer != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBeer: null,
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
  // ......sell.......
  handleSellBeer = (beerTosell) => {
    const sellBeer = this.state.masterBeerList.map((beer) => {
      if (beer.id !== beerTosell) {
        return beer;
      }
      return {
        ...beer,
        pint: beer.pint - 1,
      };
    });
    this.setState({
      masterBeerList: sellBeer,
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
      buttonText = "Return to detail page";
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
          onClickSell={this.handleSellBeer}
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
