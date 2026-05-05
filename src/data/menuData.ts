export type MenuItem = {
  id: string;
  price: number;
  portion?: string;
};

export type MenuCategory = {
  id: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  /* ================= ROASTED ================= */
  {
    id: "roasted",
    items: [
      { id: "roastedVeal", portion: "350g", price: 15.5 },
      { id: "roastedLamb", portion: "350g", price: 15.5 },
    ],
  },
  /*GOTOVA JELA */
  {
    id: "preCooked",
    items: [
      { id: "kajmakVeal", portion: "350g", price: 15.5 },
      { id: "beefGoulash", portion: "300g", price: 6.0 },
      { id: "koljenice", portion: "700g", price: 8.0 }
    ]
  },

  /* ================= COLD APPETIZERS ================= */
  {
    id: "coldAppetizers",
    items: [
      { id: "platterDobreVode", portion: "200g", price: 9.5 },
      { id: "porkProsciutto", portion: "150g", price: 8.0 },
      { id: "beefProsciutto", portion: "150g", price: 9.0 },
      { id: "kolasinCheese", portion: "150g", price: 4.5 },
      { id: "homemadeCream", portion: "150g", price: 5.5 },
      { id: "sourMilk", portion: "0.25l", price: 1.5 },
      { id: "freshMilk", portion: "0.25l", price: 1.5 },
    ],
  },

  /* ================= HOT APPETIZERS ================= */
  {
    id: "hotAppetizers",
    items: [
      { id: "breadedCheese", portion: "150g", price: 6.0 },
      { id: "grilledVegetables", portion: "250g", price: 6.0 },
      { id: "pastaBolognese", portion: "300g", price: 9.0 },
      { id: "veganRissoto", portion: "300g", price: 8.0 },
    ],
  },

  /* ================= SOUPS ================= */
  {
    id: "soups",
    items: [
      { id: "chickenSoup", portion: "250ml", price: 3.2 },
      { id: "vealSoup", portion: "250ml", price: 3.5 },
      { id: "fishSoup", portion: "250ml", price: 4.0 },
    ],
  },

  /* ================= RESTAURANT SPECIALTIES ================= */
  {
    id: "restaurantSpecialties",
    items: [
      { id: "dobreVodeSpecialty", portion: "1kg", price: 29.5 },
      { id: "grilledSword", portion: "600g", price: 18.0 },
      { id: "nationalMix", portion: "2kg", price: 60.0 },
    ],
  },

  /* ================= DOMESTIC SPECIALTIES ================= */
  {
    id: "domesticSpecialties",
    items: [
      { id: "lambInMilk", portion: "350g", price: 15.50 },
      { id: "potatoKacamak", portion: "450g", price: 11.0 },
      { id: "cicvara", portion: "450g", price: 11.0 },
      { id: "rusticMeat", portion: "350g", price: 11.0 },
      { id: "meatOnPlate", portion: "300g", price: 10.5 },
      { id: "homemadeFlatbread", portion: "180g", price: 0.8 },
      { id: "cornBread", portion: "60g", price: 0.5 },
    ],
  },

  /* ================= GRILL ================= */
  {
    id: "grill",
    items: [
      // --- Pork & specialties ---
      { id: "porkLoin", portion: "350g", price: 10.0 },
      { id: "smokedPorkLoin", portion: "400g", price: 11.5 },
      { id: "stuffedPorkLoin", portion: "400g", price: 11.5 },
      { id: "porkSkewers", portion: "350g", price: 9.5 },
      { id: "stuffedSkewers", portion: "400g", price: 11.5 },
      { id: "porkNeck", portion: "350g", price: 9.5 },

      // --- Burgers & fritters ---
      { id: "beefCevapi", portion: "300g", price: 8.0 },
      { id: "beefBurger", portion: "300g", price: 8.0 },
      { id: "stuffedBurger", portion: "400g", price: 10.0 },
      { id: "gourmetBurger", portion: "400g", price: 10.0 },
      { id: "gourmetFritters", portion: "400g", price: 10.0 },

      // --- Chicken ---
      { id: "chickenDrumsticks", portion: "350g", price: 8.5 },
      { id: "stuffedDrumsticks", portion: "400g", price: 10.0 },
      { id: "chickenFillet", portion: "350g", price: 9.5 },
      { id: "stuffedChickenFillet", portion: "400g", price: 11.0 },

      // --- Beef ---
      { id: "grilledVeal", portion: "350g", price: 15.0 },
      { id: "beefSteak", portion: "350g", price: 30.0 },

      // --- Sausage & bacon ---
      { id: "smokedSausage", portion: "300g", price: 9.5 },
      { id: "grilledBacon", portion: "250g", price: 8.0 },
    ],
  },


  /* ================= FISH ================= */
  {
    id: "fish",
    items: [
      { id: "grilledTrout", portion: "400g", price: 10.0 },
      { id: "boneLessTrout", portion: "450g", price: 12.5 },
    ],
  },

  /*JELA PO PORUDZBINI */
  {
    id: "dishes_to_order",
    items: [
      { id: "breadedChickenFilletSesame", portion: "350g", price: 12.0 },
      { id: "kolasinSteak", portion: "350g", price: 12.5 },
      { id: "njegusiSteak", portion: "350g", price: 13.0 },

      { id: "stuffedCutletsPodgoricaStyle", portion: "350g", price: 12.5 },
      { id: "viennaSchnitzel", portion: "300g", price: 10.0 },
      { id: "karadjordjeSchnitzel", portion: "350g", price: 9.5 },
      { id: "karadjordjeSchnitzelSmall", portion: "250g", price: 8.5 },
    ],
  },

  /* PIZZA */
  {
    id: "pizza",
    items: [
      { id: "pizzaCapricciosa", portion: "450g", price: 9.0 },
      { id: "pizzaDiavolo", portion: "450g", price: 9.5 },
      { id: "pizzaDobreVode", portion: "450g", price: 11.0 },
    ],
  },

  /* PRILOZI*/
  {
    id: "side_dishes",
    items: [
      { id: "mushroomSauce", portion: "50g", price: 2.0 },
      { id: "sourCream", portion: "50g", price: 2.0 },
      { id: "boiledPotatoes", portion: "200g", price: 3.0 },
      { id: "frenchFries", portion: "200g", price: 3.5 },
      { id: "fourCheese", portion: "50g", price: 3.7 },
      { id: "dalmatianStew", portion: "150g", price: 3.5 },
      { id: "ketchup", portion: "50g", price: 0.5 },
      { id: "mayonnaise", portion: "50g", price: 0.5 },
      { id: "mustard", portion: "50g", price: 0.5 },
    ],
  },

  /* DORUCAK */
  {
    id: "breakfast",
    items: [
      { id: "homemadePie", portion: "150g", price: 6.0 },
      { id: "friedEggs", portion: "3 eggs", price: 5.5 },
      { id: "scrambledEggs", portion: "3 eggs", price: 5.5 },
      { id: "omeletteHam", portion: "3 eggs", price: 5.8 },
      { id: "omelettePorkProsciutto", portion: "3 eggs", price: 6.0 },
      { id: "omeletteBeefProsciutto", portion: "3 eggs", price: 6.5 },
      { id: "omeletteCheese", portion: "3 eggs", price: 5.5 },
      { id: "omeletteBacon", portion: "3 eggs", price: 5.8 },
      { id: "omeletteVegetables", portion: "3 eggs", price: 5.5 },
      { id: "hamAndEggs", portion: "3 eggs", price: 5.5 },
      { id: "baconAndEggs", portion: "3 eggs", price: 5.5 },
    ],
  },
  /* SENDVICI */
  {
    id: "sandwiches",
    items: [
      { id: "sandwichCheese", portion: "60g", price: 4.0 },
      { id: "sandwichCreamCheese", portion: "60g", price: 4.0 },
      { id: "tortillaPorkProsciutto", portion: "150g", price: 6.0 },
      { id: "tortillaBeefProsciutto", portion: "150g", price: 6.0 },
      { id: "tortillaHam", portion: "150g", price: 6.0 },
      { id: "burger", portion: "120g", price: 7.5 },
    ],
  },
  /* DEZERTI */
  {
    id: "desserts",
    items: [
      { id: "fruitSalad", portion: "150g", price: 3.3 },
      { id: "fruitCup", portion: "150g", price: 3.8 },
      { id: "cake", portion: "200g", price: 4.0 },
      { id: "iceCream", portion: "150g", price: 3.6 },
    ],
  },

  /* ================= SALADS ================= */
  {
    id: "salads",
    items: [
      { id: "shopskaSalad", portion: "200g", price: 3.5 },
      { id: "serbianSalad", portion: "200g", price: 3.5 },
      { id: "gardenSalad", portion: "350g", price: 5.1 },
      { id: "cucumberSalad", portion: "150g", price: 3.3 },
      { id: "tomatoSalad", portion: "150g", price: 3.3 },
      { id: "cucumberSalad", portion: "150g", price: 3.3 },
      { id: "gardenSalad", portion: "150g", price: 3.3 },
      { id: "shopskaSalad", portion: "200g", price: 3.6 },
      { id: "cucumberSalad", portion: "150g", price: 3.6 },
      { id: "shopskaSalad", portion: "150g", price: 3.6 },
      { id: "urnebes", portion: "150g", price: 2.8 },
      { id: "masline", portion: "100g", price: 2.8 },
    ],
  },
  /* ================= WHITE WINES ================= */
  {
    id: "winesWhite",
    items: [
      { id: "podgorickoBijelo", portion: "0.2l", price: 2.5 },
      { id: "krstac", portion: "0.75l", price: 16.0 },
      { id: "sauvignon", portion: "0.75l", price: 17.0 },
      { id: "chardonnay", portion: "0.75l", price: 17.0 },
      { id: "malvazija", portion: "0.75l", price: 23.0 },
      { id: "chardonnayBarrique", portion: "0.75l", price: 34.0 },
    ],
  },
  /* ================= ROSE WINES ================= */
  {
    id: "winesRose",
    items: [
      { id: "crnogorskiRose", portion: "0.75l", price: 16.0 },
      { id: "medunRose", portion: "0.75l", price: 24.0 },
    ],
  },

  /* ================= RED WINES ================= */
  {
    id: "winesRed",
    items: [
      { id: "vranacKvalitetni", portion: "0.2l", price: 2.5 },
      { id: "vranacVrhunski", portion: "0.75l", price: 17.0 },
      { id: "proCorde", portion: "0.75l", price: 19.0 },
      { id: "kratosija", portion: "0.75l", price: 23.0 },
      { id: "epoha", portion: "0.75l", price: 24.0 },
      { id: "vladika", portion: "0.75l", price: 27.0 },
      { id: "vranacBarrique", portion: "0.75l", price: 35.0 },
      { id: "vranacReserve", portion: "0.75l", price: 50.0 },
      { id: "vranacPremier", portion: "0.75l", price: 109.0 },
    ],
  },
  /* ================= SMALL BOTTLES ================= */
  {
    id: "smallBottles",
    items: [
      { id: "smallKrstac", portion: "0.187l", price: 4.0 },
      { id: "smallChardonnay", portion: "0.187l", price: 4.7 },
      { id: "smallMalvazija", portion: "0.187l", price: 5.7 },
      { id: "smallRose", portion: "0.187l", price: 4.0 },
      { id: "smallVranac", portion: "0.187l", price: 4.8 },
      { id: "smallProCorde", portion: "0.187l", price: 4.8 },
    ],
  },

  /* ================= OTHER DRINKS ================= */
  {
    id: "otherDrinks",
    items: [
      { id: "gemist", portion: "0.2l", price: 2.1 },
      { id: "bambus", portion: "0.2l", price: 2.6 },
      { id: "kupinovoVino", portion: "0.2l", price: 4.0 },
      { id: "somersby", portion: "0.33l", price: 3.5 },
    ],
  },

  /* ================= BEER ================= */
  {
    id: "beer",
    items: [
      { id: "niksickoJelen", portion: "0.5l", price: 2.2 },
      { id: "nikJelen", portion: "0.33l", price: 2.7 },
      { id: "becks", portion: "0.33l", price: 2.7 },
      { id: "bavaria", portion: "0.25l", price: 2.7 },
      { id: "carlsbergToceno", portion: "0.3l", price: 2.3 },
      { id: "tuborg", portion: "0.33l", price: 2.7 },
      { id: "heineken", portion: "0.5l", price: 2.2 },
      { id: "nonAlcoholicBeer", portion: "0.33l", price: 2.9 },
    ],
  },

];
