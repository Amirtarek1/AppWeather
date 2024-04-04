import { configureStore } from '@reduxjs/toolkit';
import WeatherSlice from './Reducers/WeatherSlice';



const store = configureStore({
  reducer: {
    Weather: WeatherSlice
  }


})

export default store;
