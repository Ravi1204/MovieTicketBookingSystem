import React, { Component } from 'react';
import MovieList from './movies/MovieList.js';
import { connect } from 'react-redux';
import { getMovies } from '../actions/MovieActions.js';
class Dashboard extends Component {
    componentDidMount(){this.props.getMovies()}
    render() {
        const{movies}=this.props.movies;
        const userId=JSON.parse(localStorage.getItem('user'));;
       if(userId==null|| userId==0)
       {
           this.props.history.push("/sign-up");
       }
      

       
        return (
            <div>
                <h1><b><center>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Movie list</center></b></h1>

                {movies.map(movie=>(
                <MovieList key={movie.id} movie={movie} />
             ) ) }
            </div>
        );
    }
}



const mapStateToProps=state=>({
   movies:state.movies
  })
 export default connect(mapStateToProps,{getMovies}) (Dashboard);