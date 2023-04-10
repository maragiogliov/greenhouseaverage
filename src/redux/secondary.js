import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCountrySecondary: "Denmark",
  numPeople: 1,

  foodDrinks: 0,
  rangeFoodDrinks: "year",
  foodDrinksFootprint: 0,
  resetFoodDrinksFootprint:0,
  showFoodDrinksResult:false,


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

               setSecondaryFootprint,


              } = secondarySlice.actions;

export default secondarySlice.reducer;