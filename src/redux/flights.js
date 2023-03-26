import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedAirportFrom: {
    code: '',
    lat: '',
    lon: '',
    name: '',
    city: '',
    state: '',
    country: '',
    type: '',
  },
  selectedAirportTo: {
    code: '',
    lat: '',
    lon: '',
    name: '',
    city: '',
    state: '',
    country: '',
    type: '',
  },
  airportFromLocation: {
    lat: null,
    lon: null
  },
  airportToLocation: {
    lat: null,
    lon: null
  },
  distanceBetweenAirports:0,
  showFlightResult:false,
  resetFlightFootprint:0,

  flightFootprint: 0
};

export const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setSelectedAirportFrom: (state, action) => {
      state.selectedAirportFrom.name = action.payload.name;
      state.selectedAirportFrom.city = action.payload.city;
      state.selectedAirportFrom.country = action.payload.country;
      state.selectedAirportFrom.code = action.payload.code;
      state.selectedAirportFrom.lat = action.payload.lat;
      state.selectedAirportFrom.lon = action.payload.lon;
      state.selectedAirportFrom.state = action.payload.state;
      state.selectedAirportFrom.type = action.payload.type;
    },
    setSelectedAirportTo: (state, action) => {
      state.selectedAirportTo.name = action.payload.name;
      state.selectedAirportTo.city = action.payload.city;
      state.selectedAirportTo.country = action.payload.country;
      state.selectedAirportTo.code = action.payload.code;
      state.selectedAirportTo.lat = action.payload.lat;
      state.selectedAirportTo.lon = action.payload.lon;
      state.selectedAirportTo.state = action.payload.state;
      state.selectedAirportTo.type = action.payload.type;
    },
    setAirportFromLocation: (state, action) => {
      state.airportFromLocation.lat = action.payload.lat;
      state.airportFromLocation.lon = action.payload.lon;
    },
    setAirportToLocation: (state, action) => {
      state.airportToLocation.lat = action.payload.lat;
      state.airportToLocation.lon = action.payload.lon;
    },
    setDistanceBetweenAirports: (state, action) => {
      state.distanceBetweenAirports = action.payload;
    },
    setFlightFootprint: (state, action) => {
      state.flightFootprint = action.payload;
    },
    resetFlightFootprint: state => {
      state.flightFootprint = initialState.flightFootprint;
    },
    setShowFlightResult: (state, action) => {
      state.showFlightResult = action.payload;
    },
  },
});

export const {
  
  setSelectedAirportFrom,
  setSelectedAirportTo,
  setAirportFromLocation,
  setAirportToLocation,
  setDistanceBetweenAirports,

  setFlightFootprint,
  setShowFlightResult,
  resetFlightFootprint

} = flightsSlice.actions;

export default flightsSlice.reducer;
