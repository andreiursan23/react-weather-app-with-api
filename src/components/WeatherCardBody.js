import { Card } from "react-bootstrap";

const WeatherCardBody = ({ weatherImage, capitalizedCity, weatherDescription, minC, maxC, feelLikeMinC, feelLikeMaxC }) => {
    return(
        <div className="weather-card">
            <Card.Img height="76.8px" width="76.8px" variant="top" src={`/images/${weatherImage}`} style={{ width: '4rem' }} />
            <Card.Body>
                <Card.Title className="mb-4">{capitalizedCity}</Card.Title>
                <Card.Text>
                    The weather today is <strong>{weatherDescription}</strong> with a minimum temperature of {minC}&#8451; that feels like {feelLikeMinC}&#8451; and a maximum temperature of {maxC}&#8451; that feels like {feelLikeMaxC}&#8451;.
                </Card.Text>
            </Card.Body>
        </div>
    );
}

export default WeatherCardBody;