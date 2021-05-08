import MovieGallery from './component/MoviesGallery';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

class App extends React.Component {

  constructor(props){
   super(props);

   this.state={
      inputText:'',
      movieList: [],
      currentMovie:[]
   }
  }


  searchMovie = (searchText) => {
    var movieId='';
    fetch (`https://api.themoviedb.org/3/search/movie?api_key=e23d4bbe9541db53d2d48b97b8c30b05&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(res=> res.json())
    .then (res => {
     
      if(res && res.results){
    

      const newResults= res.results.map((movie) => {
             movieId=movie.id;
                return {
                  title: movie.title,
                  id: movie.id,
                  poster: movie.poster_path
                   }
              })
             fetch (`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e23d4bbe9541db53d2d48b97b8c30b05&language=en-US`)
              .then(res => res.json())
              .then(res => {
                console.log(res)
                // if(res && res.results){

                // }
              })
              this.setState({
                movieList:newResults
              })

            }

        })

        this.setState({
          inputText:searchText,
        })
  }

  choosenMovie= (index) => {
      const movie= this.state.movieList[index]
      const chosenMovie= this.state.currentMovie.concat(movie)
      this.setState({
        currentMovie:chosenMovie,
        movieList:[]
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
                      </Card>
                      </Col>
              </div>
    })

    return(
      <div>
        <Col >
          <MovieGallery
            movieList={this.state.movieList}
            searchMovie={this.searchMovie}
            choosenMovie={this.choosenMovie}
            />
        </Col>
        <Container>
            <Row>
              {selectedMovie}
            </Row>
        </Container>
        </div>
    )
  }


}

export default App;
