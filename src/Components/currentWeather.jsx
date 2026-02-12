import {useSelector} from 'react-redux';

export function CurrentWeather(){

    const {current,loading,error}=useSelector(state=>{
        return state.weatherReducer;
    });
    
    if(loading){
        return <p className='p-10'>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }

    return (
        current && <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
            <h2 className="card-title">{current.name}</h2>
            <p>Temperature: {(current.main.temp-273).toFixed(1)} °C</p>
            <p>Humidity: {current.main.humidity}</p>
            <p>Weather: {current.weather[0].description}</p>
        </div>
        </div>
    )
}