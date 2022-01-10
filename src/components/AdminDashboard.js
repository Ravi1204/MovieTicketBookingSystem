import React from "react";
import Movieitem from "./adminmovies/Movieitem.js";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from "prop-types"

import { connect } from "react-redux";
import { getMovies } from "../actions/AdminMovieActions";
import CreateMovieButton from "./adminmovies/CreateMovieButton.js";

class AdminDashboard extends React.Component {
componentDidMount(){
    this.props.getMovies();
}
    render() {
        const {movies}=this.props.adminMovies
        const adminId=JSON.parse(localStorage.getItem('admin'));;
        if(adminId==null|| adminId==0)
        {
            this.props.history.push("/sign-up");
        }
        return (
           // <div className="movies">
             //   <div className="container">
                //    <div className="row">
                     //   <div className="col-md-12">
                     <div>
                            <h1 className="display-4 text-center">Movies</h1>
                            <br />
                            <CreateMovieButton/>
                            <br />
                            <hr />
                            {movies.map(movie=>(

             <Movieitem key={movie.id} movie={movie} />

    ))}

                   //     </div>
                   // </div>
            //     </div>
            // </div>

        )
    }
}
AdminDashboard.propTypes={
   // movies:PropTypes.object.isRequired,
   getMovies:PropTypes.func.isRequired
};
const mapStateToProps=state=>({
   adminMovies:state.adminMovies
})

export default connect(mapStateToProps,{getMovies}) (AdminDashboard);
