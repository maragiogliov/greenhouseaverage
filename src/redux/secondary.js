import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCountrySecondary: "Denmark",

  foodDiet: "Vegetarian",
  foodDietFootprint: 0,
  resetFoodDietFootprint:0,
  showFoodDietResult:false,

  waterFootprint:0,

  secondaryFootprint:0,
};

export const secondarySlice = createSlice({
  name: "secondary",
  initialState,
  reducers: {
    selectCountrySecondary: (state, action) => {
      state.selectedCountrySecondary = action.payload;
    },
    //Food Diet Global State
    setFoodDiet: (state, action) => {
      state.foodDiet = action.payload;
    },
    setFoodDietFootprint: (state, action) => {
      state.foodDietFootprint = action.payload;
    },
    resetFoodDietFootprint: state => {
      state.foodDietFootprint = initialState.foodDietFootprint;
    },
    setShowFoodDietResult: (state, action) => {
      state.showFoodDietResult = action.payload;
    },
    //Water
    setWaterFootprint: (state, action) => {
      state.waterFootprint = action.payload;
    },
    //Secondary Total Footprint
    setSecondaryFootprint: (state, action) => {
    state.secondaryFootprint = action.payload;
  },
  }
});

export const { 

               selectCountrySecondary,
               setFoodDiet, 
               setRangeFoodDietFactor, 
               setFoodDietFootprint,
               resetFoodDietFootprint, 
               setShowFoodDietResult,

               setWaterFootprint,

               setSecondaryFootprint,

              } = secondarySlice.actions;

export default secondarySlice.reducer;