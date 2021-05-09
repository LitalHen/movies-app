import React from 'react' 
import { withRouter } from 'react-router';

class MovieDetails extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount = () =>{
        
        fetch (`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=e23d4bbe9541db53d2d48b97b8c30b05&language=en-US`)
        .then(res => res.json())
        .then(res => {
            
                console.log(res)
                //  movieObj.stars= res2.cast[0].original_name;
                //  movieObj.director= res2.crew.find((director)=>director.known_for_department==="Directing").original_name;

   
})
    }
    render(){

        return(
            <div>text</div>
                // <div>{this.props.movieInfo}</div>
        )
    }
}
export default withRouter(MovieDetails)
// export default MovieDetails