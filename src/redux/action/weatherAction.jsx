import {FETCH_WEATHER_PENDING,FETCH_CURRENT_SUCCESS,FETCH_FORECAST_SUCCESS,FETCH_WEATHER_ERROR,SET_CITY} from '../constant/weatherConstant';
import axios from "axios";
const api=import.meta.env.VITE_WEATHER_API; 

function fetchWeatherPending(){
    return {
        type:FETCH_WEATHER_PENDING,
    }
}

function fetchCurrentSuccess(data){
    return {
        type:FETCH_CURRENT_SUCCESS,
        payload:data
    }
}
function fetchForecastSuccess(data){
    return {
        type:FETCH_FORECAST_SUCCESS,
        payload:data
    }
}
function fetchWeatherError(error){
    return {
        type:FETCH_WEATHER_ERROR,
        payload:error
    }
}
function setCity(city){
    return {
        type:SET_CITY,
        payload:city
    }
}

function fetchWeather(city){
    return async (dispatch)=>{
        dispatch(fetchWeatherPending());
        try{
            const weather=await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`);
            const forecast=await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}`);
            dispatch(fetchCurrentSuccess(weather.data));
            dispatch(fetchForecastSuccess(forecast.data.list));
        }catch(error){
            dispatch(fetchWeatherError('Something Went Wrong!!'));
        }
    }
}

export {
    fetchWeather,
    setCity 
}