import React from 'react'
import {Container, ListGroup } from 'react-bootstrap';
class MovieCard extends React.Component{

    constructor(props){
        super(props);
    }


    ChooseMovie = (index) =>{
        this.props.choosenMovie(index)        
        this.props.searchMovie('')           

    }
    render(){
                const listOfMovies= this.props.movieList.map((movie, index) =>{
                    return    <ListGroup.Item action key ={index} onClick={()=>{this.ChooseMovie(index)}}>
                                    {movie.title}
                                    </ListGroup.Item>
                                    } )
                 
        return(
            
              <Container sm={6} md={4} lg={3}>
                            <ListGroup variant="flush">
                                    {listOfMovies}
                            </ListGroup>
                 </Container>
                 
        )
    }
}

export default MovieCard