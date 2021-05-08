import React from 'react' 
import {Container, Form, ListGroup } from 'react-bootstrap';

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

    ChooseMovie = (index) =>{
        this.props.choosenMovie(index)
        this.setState({
                     text: ''
                            })
        this.props.searchMovie('')           

    }


    render(){
                const listOfMovies= this.props.movieList.map((movie, index) =>{
                         return    <ListGroup.Item action key ={index} onClick={()=>{this.ChooseMovie(index)}}>
                                         {movie.title}
                                         </ListGroup.Item>
                              
                } )

        return(
                <div> 
                    <Container sm={6} md={4} lg={3} >
                        <Form.Control type="text" value= {this.state.text} onChange={this.userInput} placeholder="search movie"/>
                        <ListGroup variant="flush">
                                {listOfMovies}
                        </ListGroup>
                    </Container>
                    </div>
        )
    }
}


export default MovieGallery