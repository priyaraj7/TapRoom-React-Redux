import { v4 } from "uuid";
import { ADD_BEER, REMOVE_BEER, UPDATE_BEER } from "../actions/index";
const DEFAULT_BEER_LIST = [
  {
    name: "Gunbuster",
    brand: "Loowit Brewing Company",
    abv: 6.3,
    price: 24,
    pint: 54,
    description:
      "An easy drinking India Pale Ale featuring Simcoe, Cascade and Mosaic hops and a crisp, dry finish. Piney balanced with hints of citrus on the nose. Dry hopped on multiple occasions, including high krausen, and bunged before terminal gravity was reached to concentrate hop aroma and generate thick, creamy, aroma packed beer foam.",
    id: v4(),
  },
  {
    name: "Mo-haze-ic",
    brand: "Migration Brewing",
    abv: 6.1,
    price: 20,
    pint: 23,
    description:
      'bit aggressively hopped IPA, 3 pounds per barrel and over 20 pounds of Mosaics create a juicy, tropical hop delight. Only using a small late boil addition and heavy dry hop additions leaves this IPA with very little perceived bitterness and a juice explosion of hop flavor, loaded with berry, passion fruit, papaya, orange and tropical aromas. Domestic Two-row along with along with a high percentage of wheat create a pale, full-bodied ale that let the hops do all the work. This hazy will be sure to leave saying, "Gimme some mo!"',
    id: v4(),
  },
  {
    name: " Blood Orange IPA",
    brand: "Lucky Envelope Brewing",
    abv: 6.7,
    price: 12,
    pint: 108,
    description:
      "Blood Orange infused into Lucky Envelope's IPA for distinctly orange citrus notes complementing the base beer.",
    id: v4(),
  },
];

export default (state = DEFAULT_BEER_LIST, action) => {
  switch (action.type) {
    case ADD_BEER:
      return [...state, { ...action.payload, id: v4() }];
    case REMOVE_BEER:
      return state.filter((beer) => beer.id === action.payload.id);
    case UPDATE_BEER:
      return state.map((beer) => {
        if (beer.id === action.payload.id) {
          return {
            ...beer,
            ...action.payload,
          };
        }
        return beer;
      });
    default:
      return state;
  }
};
