import { Container,Card,Col,Row} from "react-bootstrap";



const Experience = () => {
    return ( 
        <div>
            <br/>
            <br/>
        <div className="texts">
            <h1 style ={{color:"white",textAlign:"center"}}>EXPERIENCE</h1>
        <Container>
            <Row>
            <Col>

            <Card style={{ width: '22rem' }} bg="info"  >

                <Card.Body>
                    <Card.Title>UPilot Internship</Card.Title>
                    <Card.Subtitle>Software Engineer Intern - July 1 2022 - November 1 2022</Card.Subtitle>
                    <Card.Text>
                        I worked with UPilot to create data warehouses and BI reports.
                        
                    </Card.Text>


                </Card.Body>


            </Card>
            </Col><br/>
            <Col>

                <Card style={{ width: '22rem' }} bg="info">

                    <Card.Body>
                        <Card.Title>Air Pollution and Emmigration behaviours</Card.Title>
                        <Card.Subtitle>Research Paper</Card.Subtitle>
                        <Card.Text>
                         <a href={"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4005727"}>Link to the paper</a>
                        </Card.Text>


                    </Card.Body>
                </Card>

            </Col>
            <br/><Col>

                <Card style={{ width: '22rem' }} bg="info">

                    <Card.Body>
                        <Card.Title>A2B</Card.Title>
                        <Card.Subtitle>Waitress September 2022- present</Card.Subtitle>
                        <Card.Text>
                            I worked as a waitress at A2B
                        </Card.Text>


                    </Card.Body>
                </Card>

            </Col>
            </Row>
            </Container></div>
            <br/>
            <br/>
            <div>

            <h1 style ={{color:"white",textAlign:"center"}}>EDUCATION</h1>
            <Container>
                <Row>
                <Col>
            <Card style={{ width: '22rem' }} bg="warning">
                
                <Card.Body>
                
                    <Card.Title>Bachelor's of Data Science</Card.Title>
                    <Card.Subtitle>2021-2024</Card.Subtitle>
                    <Card.Text>
                        SpJain School of Global Management, CGPA: 4.15/4.3.
                    </Card.Text>
                </Card.Body>

            </Card>
        </Col><br/><Col>
                <Card  style={{ width: '22rem' }} bg="warning">
                    
                    <Card.Body>
                    
                        <Card.Title>High School</Card.Title>
                        <Card.Subtitle>2020-2021</Card.Subtitle>
                        <Card.Text>
                            Army Public School Dhaula Kuan, Aggregate:96.7%.
                        </Card.Text>
                    </Card.Body>

                </Card>
            </Col><br/><Col>
                <Card style={{ width: '22rem' }} bg="warning">
                    
                    <Card.Body>
                       
                        <Card.Title>Secondary School</Card.Title>
                        <Card.Subtitle>2018-2019</Card.Subtitle>
                        <Card.Text>
                            Army Public School Chandimandir, Aggregate :97.6%.
                        </Card.Text>
                    </Card.Body>

                </Card>
            </Col>
                </Row>
            </Container>
            </div>
            
            </div>

     );
}
 
export default Experience;