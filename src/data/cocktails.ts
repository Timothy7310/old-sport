import type { Cocktail } from "../types/index.types";
import C_C from "@/assets/cocktails/C-and-C.jpg";
import chuhai from "@/assets/cocktails/chuhai.jpg";
import twentyOne from "@/assets/cocktails/21.21.jpg";
import cigaleGimlet from "@/assets/cocktails/cigale-gimlet.jpg";
import mizuwari from "@/assets/cocktails/mizuwari.jpg";
import waboo from "@/assets/cocktails/waboo.jpg";
import hedonism from "@/assets/cocktails/hedonism.jpg";
import bananaMilkPunch from "@/assets/cocktails/banana-milk-punch.jpg";
import czechCola from "@/assets/cocktails/czech-cola.jpg";
import pendennisClub from "@/assets/cocktails/pendennis-club.jpg";
import jungleBird from "@/assets/cocktails/jungle-bird.jpg";
import oldCoconut from "@/assets/cocktails/old-coconut.jpg";
import crimsonPeak from "@/assets/cocktails/crimson-peak.jpg";
import fitzgerald from "@/assets/cocktails/fitzgerald.jpg";
import georgeWashington from "@/assets/cocktails/george-washington.jpg";
import madBillsToPay from "@/assets/cocktails/mad-bills-to-pay.jpg";
import lyon from "@/assets/cocktails/lyon.jpg";
import widowKiss from "@/assets/cocktails/widow-kiss.jpg";
import chamagneCharlie from "@/assets/cocktails/chamagne-charlie.jpg";
import champsElysees from "@/assets/cocktails/champs-elysees-2.0.jpg";
import fightTheFlower from "@/assets/cocktails/fight-the-flower.jpg";
import afterAllImperial from "@/assets/cocktails/after-all-imperial.jpg";
import MCL from "@/assets/cocktails/MCL.jpg";
import rubicon from "@/assets/cocktails/rubicon.jpg";
import petroVodkin from "@/assets/cocktails/petro-vodkin.jpg";
import elMartinez from "@/assets/cocktails/el-martinez.jpg";
import bananaRefashioned from "@/assets/cocktails/banana-refashioned.jpg";
import dirtySour from "@/assets/cocktails/dirty-sour.jpg";
import laskos from "@/assets/cocktails/laskos.jpg";
import wineCordial from "@/assets/cocktails/wine-cordial.jpg";
import fiveFingerMartini from "@/assets/cocktails/five-finger-martini.jpg";
import raito from "@/assets/cocktails/raito.jpg";
import Kukichafizz from "@/assets/cocktails/kukicha-fizz.jpg";
import BonVivant from "@/assets/cocktails/bon-vivant.jpg";

export const cocktails: Cocktail[] = [
  {
    image: C_C,
    name: "C&C",
    isWideName: false,
    isCocktailOfDay: true,
    ingredients: [
      {
        name: "Bourbon",
        value: "45 ml.",
      },
      {
        name: "Coconut water",
        value: "80 ml.",
      },
      {
        name: "Coffee syrup",
        value: "20 ml.",
      },
    ],
  },
  {
    image: chuhai,
    name: "Chūhai",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Vodka",
        value: "15 ml.",
      },
      {
        name: "Coconut Rum",
        value: "15 ml.",
      },
      {
        name: "Buckwheat soda",
        value: "80 ml.",
      },
    ],
  },
  {
    image: twentyOne,
    name: "21.21",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Gin",
        value: "10 ml.",
      },
      {
        name: "Cacao White Liqueur",
        value: "10 ml.",
      },
      {
        name: "20 ml.",
        value: "Riesling",
      },
      {
        name: "30 ml.",
        value: "Coconut water",
      },
      {
        name: "2 Dashes",
        value: "Absinthe",
      },
    ],
  },
  {
    image: cigaleGimlet,
    name: "Cigale gimlet",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Yogurt vodka",
        value: "45 ml.",
      },
      {
        name: "Mint cordial",
        value: "30 ml.",
      },
      {
        name: "St-Germain",
        value: "10 ml.",
      },
    ],
  },
  {
    image: mizuwari,
    name: "Mizuwari",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Whiskey",
        value: "40 ml.",
      },
      {
        name: "Strawberry water",
        value: "60 ml.",
      },
      {
        name: "Lemongrass syrup",
        value: "10 ml.",
      },
    ],
  },
  {
    image: waboo,
    name: "WaBoo",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Jerez Fino",
        value: "30 ml.",
      },
      {
        name: "Sake",
        value: "30 ml.",
      },
      {
        name: "Watermelon syrup",
        value: "10 ml.",
      },
      {
        name: "Per Se",
        value: "10 ml.",
      },
      {
        name: "Peychaud's bitter",
        value: "1 Dash",
      },
      {
        name: "Orange bitter",
        value: "1 Dash",
      },
    ],
  },
  {
    image: hedonism,
    name: "Hedonism",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Light Rum",
        value: "40 ml.",
      },
      {
        name: "Pineapple juice",
        value: "40 ml.",
      },
      {
        name: "Lemon juice",
        value: "20 ml.",
      },
      {
        name: "Lemongrass syrup",
        value: "20 ml.",
      },
    ],
  },
  {
    image: bananaMilkPunch,
    name: "Banana milk punch",
    isWideName: true,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Banana milk",
        value: "40 ml.",
      },
      {
        name: "Jerez Fino",
        value: "15 ml.",
      },
      {
        name: "Lemon juice",
        value: "20 ml.",
      },
      {
        name: "Bourbon",
        value: "25 ml.",
      },
    ],
  },
  {
    image: czechCola,
    name: "Czech Cola",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Lime juice",
        value: "30 ml.",
      },
      {
        name: "Dark Rum",
        value: "60 ml.",
      },
      {
        name: "Jerez Pedro Ximenez",
        value: "30 ml.",
      },
      {
        name: "Dark Beer",
        value: "120 ml.",
      },
    ],
  },
  {
    image: pendennisClub,
    name: "Pendennis Club",
    isWideName: true,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Gin",
        value: "60 ml.",
      },
      {
        name: "Pendennis mix",
        value: "25 ml.",
      },
      {
        name: "Lime juice",
        value: "25 ml.",
      },
      {
        name: "Peychaud's bitter",
        value: "2 Dashes",
      },
    ],
  },
  {
    image: jungleBird,
    name: "Jungle Bird",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Pineapple Rum",
        value: "50 ml.",
      },
      {
        name: "Campari",
        value: "15 ml.",
      },
      {
        name: "Amaro Montenegro",
        value: "25 ml.",
      },
      {
        name: "Saffron-Apple cordial",
        value: "10 ml.",
      },
    ],
  },
  {
    image: oldCoconut,
    name: "Old Coconut",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Coconut Rum",
        value: "60 ml.",
      },
      {
        name: "Apricot liqueur",
        value: "5 ml.",
      },
      {
        name: "Demerara gum syrup",
        value: "5 ml.",
      },
      {
        name: "Angostura bitter",
        value: "2 Dashes",
      },
    ],
  },
  {
    image: crimsonPeak,
    name: "Crimson Peak",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Sweet Vermouth",
        value: "50 ml.",
      },
      {
        name: "Strawberry Shrub",
        value: "15 ml.",
      },
      {
        name: "Per Se",
        value: "20 ml.",
      },
      {
        name: "Rosé Champagne",
        value: "90 ml.",
      },
      {
        name: "Peychaud's bitter",
        value: "2 Dashes",
      },
    ],
  },
  {
    image: fitzgerald,
    name: "Fitzgerald",
    isWideName: false,
    isCocktailOfDay: true,
    ingredients: [
      {
        name: "Jerez Fino",
        value: "80 ml.",
      },
      {
        name: "Apricot Brandy",
        value: "20 ml.",
      },
      {
        name: "Dry Curacao",
        value: "20 ml.",
      },
    ],
  },
  {
    image: georgeWashington,
    name: "George Washington",
    isWideName: true,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Calvados",
        value: "30 ml.",
      },
      {
        name: "Rye Whiskey",
        value: "30 ml.",
      },
      {
        name: "Sweet Vermouth",
        value: "25 ml.",
      },
      {
        name: "Cherry Liqueur",
        value: "25 ml.",
      },
      {
        name: "Pimento Dram",
        value: "for rinsing",
      },
    ],
  },
  {
    image: madBillsToPay,
    name: "Mad Bills to Pay",
    isWideName: true,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Gin",
        value: "45 ml.",
      },
      {
        name: "Apple-Coriander Beer syrup",
        value: "15 ml.",
      },
      {
        name: "Lemon Juice",
        value: "15 ml.",
      },
      {
        name: "Aperitivo",
        value: "15 ml.",
      },
      {
        name: "Peychaud's bitter",
        value: "4 Dashes",
      },
    ],
  },
  {
    image: lyon,
    name: "Lyon",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Cherry Tomato Shrub",
        value: "40 ml.",
      },
      {
        name: "Vodka with Paprika",
        value: "40 ml.",
      },
      {
        name: "Suze",
        value: "20 ml.",
      },
    ],
  },
  {
    image: widowKiss,
    name: "Widow's Kiss",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Calvados",
        value: "45 ml.",
      },
      {
        name: "Benedictine",
        value: "15 ml.",
      },
      {
        name: "Yellow Chartreuse",
        value: "15 ml.",
      },
      {
        name: "Lemon Juice",
        value: "1 Dash",
      },
      {
        name: "Angostura bitter",
        value: "1 Dash",
      },
    ],
  },
  {
    image: chamagneCharlie,
    name: "Chamagne Charlie",
    isWideName: true,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Dry Sparkling Wine",
        value: "90 ml.",
      },
      {
        name: "Peach Puree",
        value: "40 ml.",
      },
      {
        name: "Dry Vermouth",
        value: "20 ml.",
      },
      {
        name: "St-Germain",
        value: "20 ml.",
      },
      {
        name: "Thyme",
        value: "2 Springs",
      },
    ],
  },
  {
    image: champsElysees,
    name: "Champs Élysées 2.0",
    isWideName: true,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Cognac",
        value: "45 ml.",
      },
      {
        name: "Vanilla Whiskey",
        value: "15 ml.",
      },
      {
        name: "Green Chartreuse",
        value: "15 ml.",
      },
      {
        name: "Saffron-Apple cordial",
        value: "20 ml.",
      },
      {
        name: "Angostura bitter",
        value: "1 Dash",
      },
    ],
  },
  {
    image: fightTheFlower,
    name: "Fight the flower",
    isWideName: true,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Gin",
        value: "35 ml.",
      },
      {
        name: "Dry Vermouth",
        value: "30 ml.",
      },
      {
        name: "Amaro Montenegro",
        value: "15 ml.",
      },
      {
        name: "Chamomile syrup",
        value: "20 ml.",
      },
      {
        name: "Egg white",
        value: "30 ml.",
      },
      {
        name: "Angostura bitter",
        value: "1 Dash",
      },
    ],
  },
  {
    image: afterAllImperial,
    name: "After All Imperial",
    isWideName: true,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Calvados",
        value: "45 ml.",
      },
      {
        name: "Peach liqueur",
        value: "15 ml.",
      },
      {
        name: "Lemon Juice",
        value: "15 ml.",
      },
      {
        name: "Angostura bitter",
        value: "2 Dashes",
      },
      {
        name: "Dry Sparkling Wine",
        value: "60 ml.",
      },
    ],
  },
  {
    image: MCL,
    name: "MCL",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Maraschino liqueur",
        value: "40 ml.",
      },
      {
        name: "Cognac",
        value: "45 ml.",
      },
      {
        name: "Limoncello",
        value: "20 ml.",
      },
      {
        name: "Lemon Juice",
        value: "20 ml.",
      },
    ],
  },
  {
    image: rubicon,
    name: "Rubicon",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Green Chartreuse",
        value: "15 ml.",
      },
      {
        name: "Gin",
        value: "60 ml.",
      },
      {
        name: "Maraschino liqueur",
        value: "15 ml.",
      },
      {
        name: "Lemon Juice",
        value: "15 ml.",
      },
      {
        name: "Rosemary",
        value: "2 Springs",
      },
    ],
  },
  {
    image: petroVodkin,
    name: "Petro-Vodkin",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Amaro Montenegro",
        value: "35 ml.",
      },
      {
        name: "Suze",
        value: "20 ml.",
      },
      {
        name: "Dry vermouth",
        value: "25 ml.",
      },
      {
        name: "Italicus",
        value: "7 ml.",
      },
    ],
  },
  {
    image: elMartinez,
    name: "El Martinez",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Tequila Reposado",
        value: "60 ml.",
      },
      {
        name: "Sweet Vermouth",
        value: "22.5 ml.",
      },
      {
        name: "Lemon Juice",
        value: "22.5 ml.",
      },
      {
        name: "Maraschino liqueur",
        value: "7.5 ml.",
      },
      {
        name: "Agave syrup",
        value: "7.5 ml.",
      },
      {
        name: "Orange bitter",
        value: "2 Dashes",
      },
    ],
  },
  {
    image: bananaRefashioned,
    name: "Banana Refashioned",
    isWideName: true,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Banana Rum",
        value: "60 ml.",
      },
      {
        name: "Jerez Pedro Ximenez",
        value: "15 ml.",
      },
      {
        name: "Agave syrup",
        value: "15 ml.",
      },
      {
        name: "Angostura bitter",
        value: "1 Dash",
      },
      {
        name: "Cocoa bitter",
        value: "4 Dashes",
      },
    ],
  },
  {
    image: dirtySour,
    name: "Dirty Sour",
    isWideName: false,
    isCocktailOfDay: true,
    ingredients: [
      {
        name: "Gin",
        value: "40 ml.",
      },
      {
        name: "Dirty Apple liqueur",
        value: "10 ml.",
      },
      {
        name: "Simple syrup",
        value: "10 ml.",
      },
      {
        name: "Lemon juice",
        value: "20 ml.",
      },
    ],
  },
  {
    image: laskos,
    name: "Laskos",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Gin with Olive",
        value: "40 ml.",
      },
      {
        name: "Apple Cordial",
        value: "25 ml.",
      },
      {
        name: "St-Germain",
        value: "10 ml.",
      },
      {
        name: "Tonic",
        value: "60 ml.",
      },
    ],
  },
  {
    image: wineCordial,
    name: "Wine Squze",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Wine Cordial",
        value: "20 ml.",
      },
      {
        name: "Brandy",
        value: "40 ml.",
      },
      {
        name: "Peach liqueur",
        value: "7 ml.",
      },
      {
        name: "Orange bitter",
        value: "1 Dash",
      },
    ],
  },
  {
    image: fiveFingerMartini,
    name: "Five finger Martini",
    isWideName: true,
    isCocktailOfDay: true,
    ingredients: [
      {
        name: "Yogurt vodka",
        value: "40 ml.",
      },
      {
        name: "Vodka",
        value: "20 ml.",
      },
      {
        name: "Dolin Blanc",
        value: "10 ml.",
      },
      {
        name: "Mint cordial",
        value: "2.5 ml.",
      },
      {
        name: "Water",
        value: "20 ml.",
      },
    ],
  },
  {
    image: raito,
    name: "Raito",
    isWideName: false,
    isCocktailOfDay: false,
    ingredients: [
      {
        name: "Sake",
        value: "45 ml.",
      },
      {
        name: "Kukicha cordial",
        value: "30 ml.",
      },
      {
        name: "Umeshu",
        value: "10 ml.",
      },
    ],
  },
  {
    image: Kukichafizz,
    name: "Kukicha fizz",
    isWideName: false,
    isCocktailOfDay: true,
    ingredients: [
      {
        name: "Gin",
        value: "45 ml.",
      },
      {
        name: "Kukicha soda",
        value: "30 ml.",
      },
      {
        name: "Simple syrup",
        value: "10 ml.",
      },
    ],
  },
  {
    image: BonVivant,
    name: "Bon-Vivant",
    isWideName: false,
    isCocktailOfDay: true,
    ingredients: [
      {
        name: "Campari",
        value: "30 ml.",
      },
      {
        name: "Cherry Liqueur",
        value: "30 ml.",
      },
      {
        name: "Porto Ruby",
        value: "60 ml.",
      },
      {
        name: "Gin with walnut",
        value: "60 ml.",
      },
    ],
  },
];
