import './App.css';
import { useSelector} from 'react-redux';
import {Search} from './Components/Search'
import {CurrentWeather} from './Components/currentWeather';
import {ForecastWeather} from './Components/forecastWeather';

function App() {

  return (
    <div className='p-10 flex flex-col items-center gap-10'>
      <div className='sticky top-0 p-10 bg-base-100 z-10 w-full flex flex-col items-center'>
        <h1 className='text-3xl mb-2'>Weather Dashboard!!</h1>
        <Search/>
      </div>
      <CurrentWeather className='m-10'/>
      <ForecastWeather className='m-10'/>
    </div>
  )
}

export default App