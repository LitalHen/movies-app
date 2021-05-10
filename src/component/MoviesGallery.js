import React from 'react' 
import {Container, Form, Jumbotron, ListGroup} from 'react-bootstrap';
import MovieCard from './MovieCard';
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
            this.searchMovie('')  
    }

    searchMovie = (searchText) => {
   
        fetch (`https://api.themoviedb.org/3/search/movie?api_key=e23d4bbe9541db53d2d48b97b8c30b05&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(res=> res.json())
        .then (res => {
            
          if(res && res.results){
              const newResults= res.results.map((movie) => {
                        return {
                          title: movie.original_title,
                          poster: movie.poster_path,
                          id: movie.id
                          }
                      })
                
                        this.setState({
                            movieList:newResults,
                        })         
                    }

                    })
            }

    render(){
               
        const listOfMovies= this.state.movieList.map((movie, index) =>{
            return    <ListGroup.Item action key ={index} onClick={()=>{this.choosenMovie(index)}}>
                            {movie.title}
                            </ListGroup.Item>
                            } )
        return(
                <div> 
                    <Jumbotron>
                       <h1> Movies Page</h1>
                    </Jumbotron>
                       <Form.Control type="text" value= {this.state.text} onChange={this.userInput} placeholder="search movie"/>
                        <Container sm={6} md={4} lg={3}>
                                <ListGroup variant="flush">
                                        {listOfMovies}
                                </ListGroup>
                            </Container>

                            <MovieCard 
                             currentMovie={this.state.currentMovie}
                                    />
                     
                    </div>
        )
    }
}


export default MovieGallery