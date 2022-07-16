import axios from 'axios'
import { useState, useEffect} from 'react'
const Weather = ({ latlng, capital }) => {

    const latiitude = latlng[0];
    const longtitude = latlng[1];
    const [temp, setTemp] = useState(0);
    const [wind, setWind] = useState(0);
    const [icon, setIcon] = useState('');
    const API = "***REMOVED***";
    useEffect(() => {
        console.log("Effect");

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latiitude}&lon=${longtitude}&appid=${API}`)
            .then(
                resolve => {
                    console.log("Resolved");
                    setTemp(resolve.data.main.temp - 273.15);
                    setWind(resolve.data.wind.speed);
                    setIcon(resolve.data.weather[0].icon);
                }
        )
    });

    return (
        <div>
            <h2> Weather in {capital}</h2>
            <p> temperature: {temp} Celsisus </p>
            <p> wind {wind} m/s </p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={ icon} />
        </div>
        
    )
}
export default Weather;