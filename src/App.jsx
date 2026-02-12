import './App.css';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeather} from "./redux/action/weatherAction";
import {Search} from './Components/Search'
import {CurrentWeather} from './Components/currentWeather';
import {ForecastWeather} from './Components/forecastWeather';

function App() {
  const city=useSelector((state)=>{
    return state.weatherReducer.city;
  });

  return (
    <div className='p-10 flex flex-col items-center'>
      <Search/>
      <CurrentWeather/>
      <ForecastWeather/>
    </div>
  )
}

export default App