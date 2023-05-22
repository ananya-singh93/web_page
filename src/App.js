import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from './pages/Projects';
import Experience from './pages/Experience';

import { Container } from 'react-bootstrap';




function App() {
return (

	
	<Router>
    <div className="trial1" style={{backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ86WeadcHiViS3HMZneg8KCZ-mMLVP8Z7oPA&usqp=CAU)`}}>
          
    <br/>      
    <div >
    <Container>
      <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
      <a className="navbar-brand" href="#">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/DotAS-Bahnschrift_Condensed.svg/1200px-DotAS-Bahnschrift_Condensed.svg.png" class="me-2" height="30" alt="ananya" loading="lazy"  />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link " href="/Home">Home </a>
          <a className="nav-item nav-link" href="/Skills">Skills</a>
          <a className="nav-item nav-link" href="/Projects">Projects</a>
          <a className="nav-item nav-link" href="/Experience">Experience/Education</a>
          
        </div>
      </div>
    </nav>
    </Container>
    <br/>
  </div>



        
          <Switch>
            
            
            <Route excat path="/Skills">
              {Skills}
            </Route>
            <Route excat path="/Projects">
              {Projects}
            </Route>
            <Route excat path="/Experience">
              {Experience}
            </Route>
          
         
            <Route excat path="/">{Home}</Route>
          </Switch>

              

         
        </div>
  </Router>
 
);
}

export default App;
