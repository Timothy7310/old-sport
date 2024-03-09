export type Cocktail = {
  image: string;
  name: string;
  isWideName: boolean;
  isCocktailOfDay: boolean;
  ingredients: { name: string; value: string }[];
};
