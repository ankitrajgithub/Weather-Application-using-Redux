import {useDispatch, useSelector} from 'react-redux';
import {setCity, fetchWeather} from '../redux/action/weatherAction';

export function Search() {
    const city=useSelector((state)=>{
        return state.weatherReducer.city;
      });

    const dispatch=useDispatch();

    function handleInput(e){
        dispatch(setCity(e.target.value));
    }

    function handleSearchButton(){
        dispatch(fetchWeather(city));
    }

    return (
        <div className="join">
            <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" required placeholder="Search" onChange={handleInput} value={city}/>
            </label>
            <button className="btn btn-accent join-item" onClick={handleSearchButton}>Search</button>
        </div>
    )
}