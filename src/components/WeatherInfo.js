import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Card } from "react-bootstrap";
import WeatherSpinner from "./WeatherSpinner";
import WeatherCardBody from "./WeatherCardBody";

const WeatherInfo = () => {
    const { city } = useParams();
    const { country } = useParams();
    const [minC, setMinC] = useState(0);
    const [maxC, setMaxC] = useState(0);
    const [feelLikeMinC, setFeelsLikeMinC] = useState(0);
    const [feelLikeMaxC, setFeelsLikeMaxC] = useState(0);
    const [weatherImage, setWeatherImage] = useState(null);
    const [weatherDescription, setWeatherDescription] = useState(null);
  
    let capitalizedCity = String(city).toUpperCase();
  
    let location = `${city},${country}`;
    const clientId = 'IqHLl3piNO1rqL9gWXOz9';
    const clientSecret = 'bgqQURKm99Sbk1fIZMvu7CjlcpeBF9152ljfUQXf';

    let [isLoading, setIsLoading] = useState(null);
  
    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`https://api.aerisapi.com/conditions/summary/${location}?format=json&client_id=${clientId}&client_secret=${clientSecret}`)
            .then(response => {
                setMinC(response.data.response[0].periods[0].temp.minC);
                setMaxC(response.data.response[0].periods[0].temp.maxC);
                setFeelsLikeMinC(response.data.response[0].periods[0].feelslike.minC);
                setFeelsLikeMaxC(response.data.response[0].periods[0].feelslike.maxC);
                setWeatherImage(response.data.response[0].periods[0].weather.icon);
                setWeatherDescription(response.data.response[0].periods[0].weather.phrase);
                setIsLoading(false);
            })
            .catch(() => {
                alert('Not communicating with the server!');
            })
    }, [location]);
    
    return(
        <div className="body d-flex justify-content-center align-items-center container-fluid">
            <div>
                <Card style={{ width: '18rem', height: '23rem' , textAlign: 'center' }} className="align-items-center justify-content-center">
                    {
                        isLoading ? 
                        <WeatherSpinner loading={isLoading} /> : 
                        <WeatherCardBody weatherImage={weatherImage} capitalizedCity={capitalizedCity} weatherDescription={weatherDescription} minC={minC} maxC={maxC} feelLikeMinC={feelLikeMinC} feelLikeMaxC={feelLikeMaxC} />
                    }
                </Card>
            </div>
        </div>
    );
}

export default WeatherInfo;