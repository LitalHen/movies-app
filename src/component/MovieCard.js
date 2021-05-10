import React from 'react'
import {Card, Col, Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
class MovieCard extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
                
                const selectedMovie= this.props.currentMovie.map((movie) => {
                    return <div>
                                <Col>
                                <Card key={movie.id} sm={6} md={4} lg={3} style={{ width: '18rem' }}>

                                    <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster}`}/>
                                        <Card.Body>
                                            <Card.Title> {movie.title} </Card.Title>
                                            <Link to={`/movie/${movie.id}`}>Click For More Details</Link>
                                        </Card.Body>
                                       
                                    </Card>
                                </Col>
                        </div>    
                        })
                 
        return(
            

           <Container>
                 <Row>
                 {selectedMovie}
                 </Row>
             </Container>
                 
        )
    }
}

export default MovieCard