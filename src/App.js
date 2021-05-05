import './App.css';
import MovieGallery from './component/MoviesGallery';
import React from 'react';

class App extends React.Component {

  constructor(props){
   super(props);

   this.state={
      inputText:'',
      movieList: []
   }
  }


  searchMovie = (searchText) => {

    fetch (`https://api.themoviedb.org/3/search/movie?api_key=e23d4bbe9541db53d2d48b97b8c30b05&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(res=> res.json())
    .then (res => {

        this.setState({
            inputText:searchText,
           
            movieList: res.results
          })
          console.log( res.results)

    })
  }

  render(){

    return(
      <MovieGallery
        movieList={this.state.movieList}
        searchMovie={this.searchMovie}
        />
    )
  }
    

}

export default App;
