import {FETCH_WEATHER_PENDING,FETCH_CURRENT_SUCCESS,FETCH_FORECAST_SUCCESS,FETCH_WEATHER_ERROR,SET_CITY} from '../constant/weatherConstant';

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

export {
    fetchWeatherPending,
    fetchCurrentSuccess,
    fetchForecastSuccess,
    fetchWeatherError,
    setCity 
}