import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const initialState = {
    loading: false,
    weatherDate: {},
    error: "",
}





export const GET_find_places = createAsyncThunk(
    "GET_find_places",
    async (_, thunkAPI) => {
        // const url = 'https://foreca-weather.p.rapidapi.com/current/102643743';
        const url = 'https://the-weather-api.p.rapidapi.com/api/weather/france';
        const options = {
            method: 'GET',
            headers: {
                // 'X-RapidAPI-Key': '1bd95570cbmshb76d4d5c201adf1p17e6e0jsne226a9930156',
                // 'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
                'X-RapidAPI-Key': 'c16b1057fcmsh9e08e20b6eb29c2p142cdajsna2cbc01f252f',
                'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
            }

        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data
            // return data.current.feelsLikeTemp;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


const WeatherSlice = createSlice({
    name: "Weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GET_find_places.pending, (state) => {
            console.log("GET_find_places.pending")
            state.loading = true,
                state.error = null
        })
            .addCase(GET_find_places.fulfilled, (state, { payload }) => {
                console.log("GET_find_places.fulfilled")
                state.loading = false,
                    state.error = null,
                    state.weatherDate = payload
                // console.log(payload);
                console.log(state.weatherDate)
            })
            .addCase(GET_find_places.rejected, (state, { error, payload }) => {
                console.log("GET_find_places.rejected, payload: \n", payload)
                state.error = error.message;
                state.loading = false;

            })
    }
})

export default WeatherSlice.reducer;
