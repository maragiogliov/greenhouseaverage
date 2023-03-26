import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCountrySecondary: "Denmark",
  numPeople: 1,

  foodDrinks: 0,
  rangeFoodDrinks: "year",
  foodDrinksFootprint: 0,
  resetFoodDrinksFootprint:0,
  showFoodDrinksResult:false,

  pharmaceuticals: 0,
  rangePharmaceuticals: "year",
  pharmaceuticalsFootprint: 0,
  resetPharmaceuticalsFootprint:0,
  showPharmaceuticalsResult:false,

  textiles: 0,
  rangeTextiles: "year",
  textilesFootprint: 0,
  resetTextilesFootprint:0,
  showTextilesResult:false,
  
  paper: 0,
  rangePaper: "year",
  paperFootprint: 0,
  resetPaperFootprint:0,
  showPaperResult:false,

  electronics: 0,
  rangeElectronics: "year",
  electronicsFootprint: 0,
  resetElectronicsFootprint:0,
  showElectronicsResult:false,

  furniture: 0,
  rangeFurniture: "year",
  furnitureFootprint: 0,
  resetFurnitureFootprint:0,
  showFurnitureResult:false,

  hotels: 0,
  rangeHotels: "year",
  hotelsFootprint: 0,
  resetHotelsFootprint:0,
  showHotelsResult:false,

  secondaryFootprint:0,
};

export const secondarySlice = createSlice({
  name: "secondary",
  initialState,
  reducers: {
    selectCountrySecondaryCategory: (state, action) => {
      state.selectedCountrySecondary = action.payload;
    },
    setNumPeople: (state, action) => {
      state.numPeople = action.payload;
    },
    //Electricity Global State
    setFoodDrinks: (state, action) => {
      state.foodDrinks = action.payload;
    },
    setRangeFoodDrinksFactor: (state, action) => {
      state.rangeFoodDrinks = action.payload;
    },
    setFoodDrinksFootprint: (state, action) => {
      state.foodDrinksFootprint = action.payload;
    },
    resetFoodDrinksFootprint: state => {
      state.foodDrinksFootprint = initialState.foodDrinksFootprint;
    },
    setShowFoodDrinksResult: (state, action) => {
      state.showFoodDrinksResult = action.payload;
    },
   // Pharmaceuticals State
    setPharmaceuticals: (state, action) => {
      state.pharmaceuticals = action.payload;
    },
    setRangePharmaceuticalsFactor: (state, action) => {
      state.rangePharmaceuticals = action.payload;
    },
    setPharmaceuticalsFootprint: (state, action) => {
      state.pharmaceuticalsFootprint = action.payload;
    },
    resetPharmaceuticalsFootprint: state => {
      state.pharmaceuticalsFootprint = initialState.pharmaceuticalsFootprint;
    },
    setShowPharmaceuticalsResult: (state, action) => {
      state.showPharmaceuticalsResult = action.payload;
    },
    //Textiles Global State
    setTextiles: (state, action) => {
      state.textiles = action.payload;
    },
    setRangeTextilesFactor: (state, action) => {
      state.rangeTextiles = action.payload;
    },
    setTextilesFootprint: (state, action) => {
      state.textilesFootprint = action.payload;
    },
    resetTextilesFootprint: state => {
      state.textilesFootprint = initialState.textilesFootprint;
    },
    setShowTextilesResult: (state, action) => {
      state.showTextilesResult = action.payload;
    },
    //Paper Global State
    setPaper: (state, action) => {
      state.paper = action.payload;
    },
    setRangePaperFactor: (state, action) => {
      state.rangePaper = action.payload;
    },
    setPaperFootprint: (state, action) => {
      state.paperFootprint = action.payload;
    },
    resetPaperFootprint: state => {
      state.paperFootprint = initialState.paperFootprint;
    },
    setShowPaperResult: (state, action) => {
      state.showPaperResult = action.payload;
    },
    //Electronics Global State
    setElectronics: (state, action) => {
      state.electronics = action.payload;
    },
    setRangeElectronicsFactor: (state, action) => {
      state.rangeElectronics = action.payload;
    },
    setElectronicsFootprint: (state, action) => {
      state.electronicsFootprint = action.payload;
    },
    resetElectronicsFootprint: state => {
      state.electronicsFootprint = initialState.electronicsFootprint;
    },
    setShowElectronicsResult: (state, action) => {
      state.showElectronicsResult = action.payload;
    },
    //Furniture Global State
    setFurniture: (state, action) => {
      state.furniture= action.payload;
    },
    setRangeFurnitureFactor: (state, action) => {
      state.rangeFurniture = action.payload;
    },
    setFurnitureFootprint: (state, action) => {
      state.furnitureFootprint = action.payload;
    },
    resetFurnitureFootprint: state => {
      state.furnitureFootprint = initialState.furnitureFootprint;
    },
    setShowFurnitureResult: (state, action) => {
      state.showFurnitureResult = action.payload;
    },
    // Hotels Global State
    setHotels: (state, action) => {
      state.hotels= action.payload;
    },
    setRangeHotelsFactor: (state, action) => {
      state.rangeHotels = action.payload;
    },
    setHotelsFootprint: (state, action) => {
      state.hotelsFootprint = action.payload;
    },
    resetHotelsFootprint: state => {
      state.hotelsFootprint = initialState.hotelsFootprint;
    },
    setShowHotelsResult: (state, action) => {
      state.showHotelsResult = action.payload;
    },
    //Secondary Total Footprint
    setSecondaryFootprint: (state, action) => {
    state.secondaryFootprint = action.payload;
  },
  }
});

export const { 
               selectCountrySecondaryCategory, 
               setNumPeople ,

               setFoodDrinks, 
               setRangeFoodDrinksFactor, 
               setFoodDrinksFootprint,
               resetFoodDrinksFootprint, 
               setShowFoodDrinksResult,

               setPharmaceuticals,
               setRangePharmaceuticalsFactor,
               setPharmaceuticalsFootprint,
               resetPharmaceuticalsFootprint,
               setShowPharmaceuticalsResult,

               setTextiles,
               setRangeTextilesFactor,
               setTextilesFootprint,
               resetTextilesFootprint,
               setShowTextilesResult,

               setPaper,
               setRangePaperFactor,
               setPaperFootprint,
               resetPaperFootprint,
               setShowPaperResult,

               setElectronics,
               setRangeElectronicsFactor,
               setElectronicsFootprint,
               resetElectronicsFootprint,
               setShowElectronicsResult,

               setFurniture,
               setRangeFurnitureFactor,
               setFurnitureFootprint,
               resetFurnitureFootprint,
               setShowFurnitureResult,

               setHotels,
               setRangeHotelsFactor,
               setHotelsFootprint,
               resetHotelsFootprint,
               setShowHotelsResult,

               setSecondaryFootprint,


              } = secondarySlice.actions;

export default secondarySlice.reducer;