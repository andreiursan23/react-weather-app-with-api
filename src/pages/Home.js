import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
    let history = useHistory();

    const checkBucharest = () => {
        history.push(`/city/Bucharest,ro`);
    }

    return(
        <>
            <div className="body d-flex justify-content-center align-items-center container-fluid">
                <div className="home">
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title className="display-3 mt-4">How's the weather today?</Card.Title>
                            <Card.Text className="mt-4">
                                Find out if today's sunny or rainy in your favourite city. Click below to see how the weather is in our hometown.
                            </Card.Text>
                            <Button onClick={checkBucharest} variant="secondary" className="mt-2 mb- p-3">Bucharest</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;