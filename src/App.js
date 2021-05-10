import MoviesGallery from './component/MoviesGallery';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import { Container, Nav} from 'react-bootstrap';
import MovieDetails from './component/MovieDetails';
class App extends React.Component {

  render(){
  
    return( 
    
    <HashRouter>
        <Nav activeKey="/home" >
              <Nav.Item>
                <Nav.Link href="/#/">Home</Nav.Link>
              </Nav.Item>
        </Nav>    
          <Container>
              <Route exact path= "/movie/:id">
              <MovieDetails></MovieDetails>
          </Route>
              </Container>
              <Container>
              <Route exact path= "/">
              <MoviesGallery> </MoviesGallery>
         </Route>
      </Container>
    </HashRouter>

    )
  }


}

export default App;
