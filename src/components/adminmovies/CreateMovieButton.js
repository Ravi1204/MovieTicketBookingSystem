import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
var CreateMovieButton=()=>{
    return(
        <React.Fragment>
       
        <Link to="/addadminmovie" class="btn btn-primary" > Add Movie </Link>
    
        </React.Fragment>
    );
}
export default CreateMovieButton;