import React from 'react' 
import { withRouter } from 'react-router';

class MovieDetails extends React.Component{

    constructor(props){
        super(props);

        this.state={
            movieInfo:{}
        }
    }

    componentDidMount = () =>{
        const movieObj={};
        fetch (`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=e23d4bbe9541db53d2d48b97b8c30b05&language=en-US`)
        .then(res => res.json())
        .then(res => {
        if(res){
            movieObj.runtime= res.runtime;
            movieObj.id=res.id;
                
        fetch (`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=e23d4bbe9541db53d2d48b97b8c30b05&language=en-US`)
        .then(res => res.json())
        .then(res => {
            if(res)
             
                movieObj.stars=res.cast[0].original_name;
                movieObj.director= res.crew.find((director)=>director.known_for_department==="Directing").original_name;
            
                this.setState({
                    movieInfo:movieObj
                })
            
    })
          


        
    }
            
   
})
    }
    render(){

        return(
                <div>
                <div>Director: {this.state.movieInfo.director}</div>
                <div> Main Stars: {this.state.movieInfo.stars}</div>
                <div>RunTime:{this.state.movieInfo.runtime}min</div>
                </div>
        )
    }
}
export default withRouter(MovieDetails)
// export default MovieDetails