import { Card,Row,Col, Container } from "react-bootstrap";


import {  BarChart,Bar,  XAxis,YAxis, Tooltip, Legend, ResponsiveContainer} from "recharts";
const skills=[{language:"Python",Years:4},{language:"SQL",Years:5},{language:"HTML",Years:1}]



const Skills = () => {
    return ( 
      <div>
      <div>
        <Container>
          <Row>
            <Col>
            <Card bg={"dark"} text={"light"} className="mb-2">
              <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" />
              <Card.Body>
                <Card.Title>Python</Card.Title>
                <Card.Text>
                  I have 4 years of experince in Python with a 5 star in hackerrank.
                </Card.Text>
              </Card.Body>

            </Card>
            </Col>
            <Col>
            <Card bg={"dark"} text={"light"}>
            <Card.Img variant="top" src="https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png" />
            <Card.Body>
              <Card.Title>SQL</Card.Title>
              <Card.Text>
                I have 5 years of experince in SQL with a 5 star in hackerrank.
              </Card.Text>
            </Card.Body>

          </Card>
          </Col>
          <Col>
            
            <Card bg={"dark"} text={"light"}>
              <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/888/888859.png" />
              <Card.Body>
                <Card.Title>HtML</Card.Title>
                <Card.Text>
                  I have one year of experince in HTML. i have done various projects and used React, JSX, JQuery and bootstrap to create websites.
                </Card.Text>
              </Card.Body>

            </Card>
            </Col>
          </Row>
        </Container>
        </div>
        <br/>
        <br/>
        <div className="chart">
          <ResponsiveContainer width='75%' height={300}>
       <BarChart
        width={600}
        height={300}
        data={skills}
        margin={{ top: 5, right: 30, left: 70, bottom: 5 }}
      >
        
            <XAxis dataKey="language" stroke="#ffb3b3" tick={{fontSize: 30}}/>
            <YAxis stroke="#ffb3b3" tick={{fontSize: 20}} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Years" fill="#6699ff" />
        
      </BarChart>
      </ResponsiveContainer>
      </div> 
      </div>
      
     
      
      
   
    
    
        
     );
}
 
export default Skills;