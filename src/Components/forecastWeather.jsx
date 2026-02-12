import {useSelector} from 'react-redux';

export function ForecastWeather(){

    const {forecast,loading,error}=useSelector(state=>{
        return state.weatherReducer;
    });

    if(loading){
        return null;
    };

    if(error){
        return <p>{error}</p>
    }

    return (
        forecast && <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
            <h2 className="card-title">{forecast.name}</h2>
            {forecast.map((item)=>{
                return <p key={item.dt}>{item.dt_txt} - {(item.main.temp-273).toFixed(1)} °C</p>
            })
            }
        </div>
        </div>
    )
}