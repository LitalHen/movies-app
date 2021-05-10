import React from 'react' 
import { Jumbotron } from 'react-bootstrap';
import { withRouter } from 'react-router';

class MovieDetails extends React.Component{

    constructor(props){
        super(props);

        this.state={
            movieInfo:{},
            movieImg:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'
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
            movieObj.poster=res.poster_path;
            movieObj.title=res.original_title;
        fetch (`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/credits?api_key=e23d4bbe9541db53d2d48b97b8c30b05&language=en-US`)
        .then(res => res.json())
        .then(res => {
            if(res){
            
                movieObj.stars=res.cast[0].original_name;
                movieObj.director= res.crew.find((director)=>director.known_for_department==="Directing").original_name;
                this.setState({
                    movieInfo:movieObj,
                    movieImg: this.state.movieImg.concat(movieObj.poster)
                    
                })
            }
    })
   
    }
         
})
    }
    render(){

        return(
            <div>
                <Jumbotron>
                    <h1>{this.state.movieInfo.title}</h1>
                </Jumbotron>
                <div style={{display:"flex"}}>
                 <img style={{width:"200px", height:"200px"}} src={this.state.movieImg}/>
                     <div style={{marginLeft:"10px"}}>
                        <h4>Director: {this.state.movieInfo.director}</h4>
                        <h4> Main Stars: {this.state.movieInfo.stars}</h4>
                        <h4>RunTime: {this.state.movieInfo.runtime} min</h4>
                        </div>
                </div>
            </div>
        )
    }
}
export default withRouter(MovieDetails)
