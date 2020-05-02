import React from "react";
import Beer from "./Beer";
import PropTypes from "prop-types";

const masterBeerList = [
  {
    name: "Gunbuster",
    brand: "Loowit Brewing Company",
    abv: 6.3,
    price: 120,
    pint: 124,
    description:
      "An easy drinking India Pale Ale featuring Simcoe, Cascade and Mosaic hops and a crisp, dry finish. Piney balanced with hints of citrus on the nose. Dry hopped on multiple occasions, including high krausen, and bunged before terminal gravity was reached to concentrate hop aroma and generate thick, creamy, aroma packed beer foam.",
  },
  {
    name: "Mo-haze-ic",
    brand: "Migration Brewing",
    abv: 6.1,
    price: 120,
    pint: 124,
    description:
      'bit aggressively hopped IPA, 3 pounds per barrel and over 20 pounds of Mosaics create a juicy, tropical hop delight. Only using a small late boil addition and heavy dry hop additions leaves this IPA with very little perceived bitterness and a juice explosion of hop flavor, loaded with berry, passion fruit, papaya, orange and tropical aromas. Domestic Two-row along with along with a high percentage of wheat create a pale, full-bodied ale that let the hops do all the work. This hazy will be sure to leave saying, "Gimme some mo!"',
  },
  {
    name: " Blood Orange IPA",
    brand: "Lucky Envelope Brewing",
    abv: 6.7,
    price: 120,
    pint: 124,
    description:
      "Blood Orange infused into Lucky Envelope's IPA for distinctly orange citrus notes complementing the base beer.",
  },
];

function BeerList(props) {
  return (
    <React.Fragment>
      <hr />
      {masterBeerList.map((beer, index) => (
        <Beer
          name={beer.name}
          brand={beer.brand}
          abv={beer.abv}
          price={beer.price}
          pint={beer.pint}
          description={beer.description}
          key={index}
        />
      ))}

      {props.beerList.map((beer) => (
        <Beer
          whenBeerClicked={props.onBeerSelection}
          name={beer.name}
          brand={beer.brand}
          abv={beer.abv}
          price={beer.price}
          pint={beer.pint}
          description={beer.description}
          id={beer.id}
          key={beer.id}
        />
      ))}
    </React.Fragment>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onBeerSelection: PropTypes.func,
};

export default BeerList;
