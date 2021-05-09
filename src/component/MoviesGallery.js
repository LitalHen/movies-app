import React from 'react' 
import {Card, Col, Container, Form, Row} from 'react-bootstrap';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';
import { HashRouter, Link, Route } from 'react-router-dom';
class MovieGallery extends React.Component{

    constructor(props){
        super(props);

        this.state={
                     text:'',
                     movieList: [],
                     inputText:'',
                     currentMovie:[],
                     movieObject:{},
                     movieId:''
                     
                }
    }

    userInput= (event) => {
        const val= event.target.value;
        this.setState({  
                     text: val
                  })
        this.searchMovie(val)
    }

    choosenMovie= (index) => {
        const movie= this.state.movieList[index]
        const chosenMovie= this.state.currentMovie.concat(movie)
        this.setState({
          currentMovie:chosenMovie,
          movieList:[],
          text: ''
            })
    }

    searchMovie = (searchText) => {
        let id='';
        
        fetch (`https://api.themoviedb.org/3/search/movie?api_key=e23d4bbe9541db53d2d48b97b8c30b05&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(res=> res.json())
        .then (res => {
            const movieObj={};
          if(res && res.results){
          
              const newResults= res.results.map((movie) => {
                     id=movie.id;
                    
                        return {
                          title: movie.original_title,
                          poster: movie.poster_path,
                          id: movie.id
                          }
                      })
                
                        fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=e23d4bbe9541db53d2d48b97b8c30b05&language=en-US`)
                        .then(res => res.json())
                        .then(res => {
                        if(res){
                            movieObj.runtime= res.runtime;
                            movieObj.id=res.id;
                                    this.setState({
                                        movieList:newResults,
                                        movieObject:movieObj,
                                        movieId: movieObj.id
                                        // inputText:searchText
                                    })
                                       }

                                    })
                                }

                                })
                        }

    render(){
               
        const selectedMovie= this.state.currentMovie.map((movie) => {
            return <div>
                     <Col>
                        <Card key={movie.id} sm={6} md={4} lg={3} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster}`}/>
                                <Card.Body>
                                    <Card.Title> {movie.title} </Card.Title>
                                </Card.Body>
                                <Link to={`/movie/${movie.id}`}>Click For More</Link>
                          </Card>
                     </Col>
                </div>    
              })
        return(
                <div> 
                       <Form.Control type="text" value= {this.state.text} onChange={this.userInput} placeholder="search movie"/>
                            <MovieCard movieList={this.state.movieList}
                                    searchMovie={this.searchMovie}
                                    choosenMovie={this.choosenMovie}
                                    />
                        <Container>
                            <Row>
                            {selectedMovie}
                            </Row>
                        </Container>
  
                     
                    </div>
        )
    }
}


export default MovieGallery