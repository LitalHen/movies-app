import React from 'react' 
import { Container, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';


class MovieGallery extends React.Component{

    constructor(props){
        super(props);

        this.state={
            text:''
                }
    }

    userInput= (event) => {

        const val= event.target.value;
        this.setState({  

                text: val
             })
        this.props.searchMovie(val)
    }


    render(){

                const movieList= this.props.movieList.map((movie) =>{
                         return    <ListGroupItem action>
                                         {movie.title}
                                     </ListGroupItem>
                              
                } )

        return(
                <div> 
                    <Container>
                        <FormControl type="text" value= {this.state.text} onChange={this.userInput}></FormControl>
                        <ListGroup variant="flush">
                                {movieList}
                          </ListGroup> 
                    </Container>
                    </div>
        )
    }
}


export default MovieGallery