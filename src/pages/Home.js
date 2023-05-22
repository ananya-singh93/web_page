import { ListGroup } from "react-bootstrap";
import "./pages.css"



const Home = () => {
    return ( 
        <div className="home-text" >
            <div className="text-zone" style={{float:"center", padding:"100px",color:"white"}}>
                <h1>Hi,                 
                I'm<p style={{fontSize:"70px"}}>Ananya Singh </p>             
                
                <h2>studying a Bachelor's In Data Science in Sydney.</h2></h1>
                <p>I am 18 years old and pursuing a bachelors in Data Science, I have worked on multiple projects related to Staistics, Calculus and Programming. I have done academically well in high school and college.I also have the experience of working as an intern in a corporate environment. The details of all these can be found in this webpage itself(designed by me). 
                    :) </p>
                <br/>
                <br/>
                <br/>
                <h4 style={{align:"center",float:"center"}}>Let's Network</h4>
                <div>
                <ListGroup variant="flush" style={{ width:'21rem' }}>
                    <ListGroup.Item  action href="  https://www.linkedin.com/in/ananya-singh-49a0b021a/ ">Linkedin</ListGroup.Item>
                    <ListGroup.Item   >Email : ananya.bs21dmu013@spjain.org </ListGroup.Item>
                    <ListGroup.Item  >T: (+61) 413706651 </ListGroup.Item>


                </ListGroup>
                </div>
               
            
            
        </div>
        </div>
     );
}
 
export default Home;