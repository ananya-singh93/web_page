import { Row,Col,Container,Card } from "react-bootstrap";


const projects = () => {
    return ( 
        <div className="texts">
            <br/>
            <br/>
            
        <Container>
            <Row>
                <Col>
            <Card >

                <Card.Body>
                    
                    <Card.Title>Autonomous Vehicle and Perception System</Card.Title>
                    <Card.Subtitle>Sep 2021</Card.Subtitle>
                    <Card.Text>
                    Systematic Review of the Perception Systems, levels of autonomy and their use in Autonomous Vehicles and its drawbacks
                    </Card.Text>
                </Card.Body>

            </Card>
       <br />
        </Col>
        <Col>
        
            <Card >

                <Card.Body>
                    
                    <Card.Title>ERD</Card.Title>
                    <Card.Subtitle>Dec 2021</Card.Subtitle>
                    <Card.Text>
                    	Developed a sample Entity-Relationship diagram for a retail store using MySQL workbench. 
                    </Card.Text>
                </Card.Body>

            </Card>
        <br />
        </Col>
        </Row>
        <Row>
       <Col>
            <Card >

                <Card.Body>
                    
                    <Card.Title>Probability in Poker</Card.Title>
                    <Card.Subtitle>Oct 2021</Card.Subtitle>
                    <Card.Text>
                    Calculated the probability for various poker hands in many different poker variations along with evaluation of positioning and body reading in poker.
                    </Card.Text>
                </Card.Body>

            </Card>
            <br />
            </Col>
        <Col>
            <Card >

                <Card.Body>
                    
                    <Card.Title>Statistics Modelling</Card.Title>
                    <Card.Subtitle>Apr 2022</Card.Subtitle>
                    <Card.Text>
                    Created a model for predicting the mileage of a car in the city based on its mileage on the highway.
                    </Card.Text>
                </Card.Body>

            </Card>
            <br />
        </Col>
        </Row>
        <Row>
        <Col>
            <Card >

                <Card.Body>
                    
                    <Card.Title>Data Warehouse</Card.Title>
                    <Card.Subtitle>Sep 2022</Card.Subtitle>
                    <Card.Text>
                    Created a Star schema based Data Warehouse using SQL Management Server for a global Superstore. 
                    </Card.Text>
                </Card.Body>

            </Card>
        </Col><br />
        <Col>
        <Card >

                <Card.Body>
                    
                    <Card.Title>Calculus Project</Card.Title>
                    <Card.Subtitle>Apr 2021</Card.Subtitle>
                    <Card.Text>
                    Created a mathematical model to predict atomic weight of radioactive elements after time t.
                    </Card.Text>
                </Card.Body>

            </Card>
        </Col></Row>
        </Container>
        </div>
     );
}
 
export default projects;