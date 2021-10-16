import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Card } from "react-bootstrap";

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
  
  
    useEffect(() => {
      axios
      .get(`https://api.aerisapi.com/conditions/summary/${location}?format=json&client_id=${clientId}&client_secret=${clientSecret}`)
      .then(response => {
        setMinC(response.data.response[0].periods[0].temp.minC);
        setMaxC(response.data.response[0].periods[0].temp.maxC);
        setFeelsLikeMinC(response.data.response[0].periods[0].feelslike.minC);
        setFeelsLikeMaxC(response.data.response[0].periods[0].feelslike.maxC);
        setWeatherImage(response.data.response[0].periods[0].weather.icon);
        setWeatherDescription(response.data.response[0].periods[0].weather.phrase);
      })
      .catch(() => {
        alert('Not communicating with the server!');
      })
    }, [location]);

    if (minC === 0 && maxC === 0 && feelLikeMinC === 0 && feelLikeMaxC === 0 && weatherImage === null && weatherDescription === null) return <></>

    return(
        <div className="body d-flex justify-content-center align-items-center container-fluid">
            <div>
                <Card style={{ width: '20rem', height: '20rem' , textAlign: 'center' }} className="align-items-center">
                    <Card.Img variant="top" src={`/images/${weatherImage}`} style={{ width: '4rem' }} />
                    <Card.Body>
                        <Card.Title className="mb-4">{capitalizedCity}</Card.Title>
                        <Card.Text>
                            The weather today is <strong>{weatherDescription}</strong> with a minimum temperature of {minC}&#8451; that feels like {feelLikeMinC}&#8451; and a maximum temperature of {maxC}&#8451; that feels like {feelLikeMaxC}&#8451;.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default WeatherInfo;